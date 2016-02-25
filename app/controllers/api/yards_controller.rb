class Api::YardsController < ApplicationController

  def index
    @yards = Yard.in_bounds(params[:bounds])
    # @yards = Yard.all
  end



end
