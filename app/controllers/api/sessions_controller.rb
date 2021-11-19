class Api::SessionsController < ApplicationController
    before_action :require_signed_in, only: [:destroy]

  def create 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user 
      login!(@user)
      render :template => "api/users/show"
    else 
      render json: ["Login failed. Please check your email and password."], status: 401
    end
  end


  def destroy
    logout!
    render json: {}
  end
end
