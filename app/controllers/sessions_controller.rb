class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: :create
    

    def create
        user = User.find_by(username: params[:username])
        puts user
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end


    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    def destroy
        session.delete(:user_id)
        head :no_content
    end

end