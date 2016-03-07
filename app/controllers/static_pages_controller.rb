class StaticPagesController < ApplicationController
  # before_action :ensure_login
  def root
    @users = User.all
  end

end
