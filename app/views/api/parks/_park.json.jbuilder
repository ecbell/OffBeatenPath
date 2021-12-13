json.extract! park, :id, :park_name, :city, :state, :country, :acreage, :park_description, :contact, :lng, :lat
json.photoUrl url_for(park.photo)