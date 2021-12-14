class Api::SearchController < ApplicationController

    def index
    @trails = Trail.where("trail_name LIKE ?", "%" + params[:q] + "%")
    @parks = Park.where ("park_name LIKE ?"), "%" + params[:q] + "%")
    render json: index
  end
end
