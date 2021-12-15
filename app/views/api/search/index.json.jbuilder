  json.array! @trails do |trail|
      json.extract! trail, :id, :trail_name
end

  json.array! @parks do |park|
      json.extract! park, :id, :park_name, :city, :state, :country
end