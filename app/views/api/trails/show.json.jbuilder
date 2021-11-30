  json.partial! 'api/trails/trail', trail: @trail 
  
  
  
  # json.reviews @trail.reviews 

  # @trail.reviews.each do |review|
  #     json.set! review.id do
  #       json.partial! 'api/reviews/review', review: review
  #     end
  # end

  # json.authors do
  #     json.set! review.author.id do
  #       json.extract! review.author, :id, :first_name, :last_name
  #     end
  #   end