class Api::YardsController < ApplicationController

  def index
    @yards = Yard.in_bounds(params[:bounds])
  end

  def create

    yard = current_user.yards.create!(yard_params)
    render json: yard
  end

  def show
    @yard = Yard.find(params[:id])
  end

  private

  def yard_params
    params.require(:yard).permit(:lat, :lng, :description, :title)
  end


end
