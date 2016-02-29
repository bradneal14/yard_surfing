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

  def destroy
    yard = Yard.find(params[:id])
    yard.destroy!
    render json: yard
  end

  private

  def yard_params
    params.require(:yard).permit(
    :lat, :lng, :description, :title,
    :max_guest_num, :location, :water_status, :fire_status,
    :shower_status, :toilet_status)
  end


end
