# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  description     :text
#  location        :string
#  gender          :string
#  birthday        :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find_by(session_token: session[:session_token])
    @user.update!(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :gender, :description)
  end

end
