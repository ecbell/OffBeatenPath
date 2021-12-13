class Api::ParksController < ApplicationController
    def index 
    @parks = Park.all
    render :index 
  end

  def show 
    @park = Park.find(params[:id])
    @nearby_trails = Trail.where(park_id: @park.id)

    render :show 
  end

  def trail_params
    params.require(:park).permit(
      :park_name, 
      :city, 
      :state, 
      :country, 
      :acreage, 
      :park_description, 
      :contact, 
      :lng, 
      :lat,
      :photo
    )
  end

end
