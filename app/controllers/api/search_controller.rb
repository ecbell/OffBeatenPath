class Api::SearchController < ApplicationController

  def index
      query = params[:query]
      @trails = Trail.where("trail_name ILIKE ?", "%#{query}%")
      @parks = Park.where("park_name ILIKE ?", "%#{query}%")

      render :index
  end
end
