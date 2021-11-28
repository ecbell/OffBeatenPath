json.extract! trail, :id, :trail_name, :park_id, :difficulty, :route_type, :waypoints, :length, :elevation_gain, :description, :lng, :lat
json.photoUrl url_for(trail.photo)