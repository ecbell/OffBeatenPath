  json.trail do 
    json.partial! 'api/trails/trail', trail: @trail 
    # json.reviews @trail.reviews 
  end

@trail.reviews.each do |review|
  json.reviews do 
    json.set! review.id do
        json.extract! review, :id, :body, :activity_type, :trail_id, :author_id, :activity_date, :star_rating
    end
  end

    json.users do
      json.set! review.author.id do
        json.extract! review.author, :id, :first_name, :last_name
    end
  end
end

json.nearbyTrails do 
  json.array! @nearby_trails do |trail|
      json.extract! trail, :id, :trail_name, :description, :lat, :lng, :difficulty, :elevation_gain, :route_type
      json.photoUrl url_for(trail.photo)
    end
end


#   @trail.reviews.each do |review|
#       json.reviews do
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end

#   json.authors do
#     json.set! review.author.id do
#       json.extract! review.author, :id, :first_name
#     end
#   end
# end


#   json.reviews do 
#     @trail.reviews.each do |review|
#         json.partial! "/api/reviews/review.json.jbuilder", review: review
#     end
# end