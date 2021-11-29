# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  author_id     :integer          not null
#  trail_id      :integer          not null
#  star_rating   :integer          not null
#  activity_type :string           not null
#  activity_date :date             not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
  validates :author_id, :trail_id, :star_rating, :activity_type, 
  :activity_date, :body, presence: true
  validates :activity_type, inclusion: { in: ["backpacking", "bike touring", 
  "bird watching", "camping", "cross-country skiing", "fishing", "hiking", 
  "horseback riding", "mountain biking", "rock climbing", "scenic driving", 
  "skiing", "via ferrata", "walking"] }
  validates :star_rating, inclusion: {in: (1..5)}

  belongs_to :author,
    class_name: :User 

  belongs_to :trail,
    class_name: :Trail


end
