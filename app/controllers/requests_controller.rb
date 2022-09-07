class RequestsController < ApplicationController

    def index
        requests = Request.all
        render json: requests
    end

    def create
        request = Request.create!(request_params)
        render json: request, status: :created
    end

    def destroy
        request = Request.find_by(id: params[:id])
        if request
            request.destroy
            head :no_content
        else
            render json: {error: "Request not found"}, status: :not_found
        end
    end

    private

    def request_params
        params.permit(:category, :comment)
    end

end