json.review do 
  json.partial! 'api/reviews/review', review: @review 
end

json.author do
  json.partial! '/api/users/user', user: @review.author
end

json.avg_rating @review.trail.avg_rating
