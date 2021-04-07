class Api::V1::SessionsController < ApplicationController

    def create 
        user = User.find_by(username: params[:session][:username])

        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            render json: user, status: 200
        else 
            render json: {
                error: "User not found"
            }
        end 
    end 

    def get_current_user 
        if logged_in?
            render json: current_user, status: 200 
        else 
            render json: {
                error: "Not logged in"
            }
        end 
    end 

    def destroy 
        session.delete :user_id
        if !session[:user_id]
            render json: {
                notice: "Welcome"
            }, status: :ok
        else 
            render json: {
                error: "Log out was unsuccessful"
            }
        end 
    end 
    
end
