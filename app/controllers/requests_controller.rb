class RequestsController < ApplicationController

    def index
        requests = Request.all
        render json: requests, include: :user
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

    def create
        request = Request.create!(request_params)
        render json: request, status: :created
    end

    def destroy
        request = Request.find_by(id: params[:id])
            request.destroy
            head :no_content
    end

    private 

    def request_params 
        params.permit(:id, :category, :comment, :user_id)
    end

end