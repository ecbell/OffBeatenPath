  json.park do 
    json.partial! 'api/parks/park', park: @park 
  end

  json.nearbyTrails do 
  json.array! @nearby_trails do |trail|
      json.extract! trail, :id, :trail_name, :description, :length, :park_id, :lat, :lng, :difficulty, :elevation_gain, :route_type, :average_rating
      json.photoUrl url_for(trail.photo)
  end
end

 json.reviews do 
  @nearby_trails.each do |trail|
    json.array! trail.reviews.each do |review|
      json.extract! review, :id, :trail_id
    end
  end
end

# json.numReviews do 
#   json.array! @numReviews
# end
