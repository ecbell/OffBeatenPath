@trails.each do |trail|
  json.trails do 
    json.set! trail.id do
      json.partial! 'api/trails/trail', trail: trail
    end
  end
end

json.parks do 
    @parks.each do |park|
      json.set! park.id do
        json.extract! park, :id, :park_name, :acreage, :city, :state, :country
        json.photoUrl url_for(park.photo)
    end
  end
end
