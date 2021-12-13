  json.park do 
    json.partial! 'api/parks/park', park: @park 
  end

  json.nearbyTrails do 
  json.array! @nearby_trails do |trail|
      json.extract! trail, :id, :trail_name, :description, :length, :park_id, :lat, :lng, :difficulty, :elevation_gain, :route_type, :average_rating
      json.photoUrl url_for(trail.photo)
    end
end