class StaticPagesController < ApplicationController

  def root
    @users = User.all
  end

end
