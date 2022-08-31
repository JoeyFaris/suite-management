class UsersController < ApplicationController
    

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json:  user, status: :created
    end

    def show
        render json: @current_user
    end

    def index
        render json: User.all
    end

    private
    
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end