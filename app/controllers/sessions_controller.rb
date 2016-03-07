class SessionsController < ApplicationController

  def new
  end

  def create

    @user = User.find_by_credentials(*session_params.values)
    if @user
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid Email/Password"]
      render :new
    end
  end

  def destroy
    logout!
    render json: ["Successfully logged out!"]
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end

end
