class RequestsController < ApplicationController

    def index
        requests = Request.all
        render json: requests
    end

    def create
        request = Request.create(request_params)
        render json: request, status: :created
    end

    def destroy
        request = Request.find_by(id: params[:id])
            request.destroy
            head :no_content
    end

    private 

    def request_params 
        params.permit(:id, :category, :comment, :user)
    end

end