class UsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:create, :show, :index]


    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json:  user, status: :created
    end

    def show
        render json: @current_user
      end


    def index
      users = User.all
        render json: users, include: [:requests, :leases]
    end


    private
    
    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end