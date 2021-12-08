class Api::TrailsController < ApplicationController
  def index 
    @trails = Trail.all
    @parks = Park.all
    render :index 
  end

  def show 
    @trail = Trail.find(params[:id])
    @nearby_trails = Trail.where.not(id: @trail.id).where(park_id: @trail.park_id)
    @park = Park.where(id: @trail.park_id)

    render :show 
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
      :lat,
      :waypoints,
      :photo
      
    )
  end
end
