json.extract! trail, :id, :trail_name, :park_id, :difficulty, :route_type, :waypoints, :length, :elevation_gain, :description, :details, :lng, :lat, :average_rating
json.photoUrl url_for(trail.photo)