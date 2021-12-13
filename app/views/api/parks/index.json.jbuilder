@parks.each do |park|
  json.parks do 
    json.set! park.id do
      json.partial! 'api/parks/park', park: park
    end
  end
end