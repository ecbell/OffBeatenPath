class Api::TrailsController < ApplicationController
  def index 
    trails = Trail.all
    render :index 
  end

  def show 
    @trail = Trail.find(params[:id])
  end

  def trail_params
    params.require(:trail).permit(
      :trail_name, 
      :park_id, 
      :difficulty, 
      :length, 
      :elevation_gain, 
      :route_type, 
      :description, 
      :lng, 
      :lat
    )
  end
end
