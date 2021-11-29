json.trail do 
  json.partial! 'api/trails/trail', trail: @trail 
  json.reviewIds @trail.reviews.pluck(:id)
end


@trail.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :first_name, :last_name
    end
  end
end