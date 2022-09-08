class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: :create, raise: false

    def create
        user = User.find_by(username: params[:username])
            puts user
            session[:user_id] = user.id
            puts render json: user, status: :ok
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

    private 
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end