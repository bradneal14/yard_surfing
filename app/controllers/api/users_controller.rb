class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def get_current_user
    @user = current_user
  end

end
