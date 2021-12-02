# == Schema Information
#
# Table name: trails
#
#  id             :bigint           not null, primary key
#  trail_name     :string           not null
#  park_id        :integer          not null
#  difficulty     :string           not null
#  length         :integer          not null
#  elevation_gain :integer          not null
#  route_type     :string           not null
#  description    :text             not null
#  lng            :float            not null
#  lat            :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  waypoints      :string
#  details        :text
#
class Trail < ApplicationRecord
  validates :trail_name, :park_id, :difficulty, :length, 
  :elevation_gain, :route_type, :description, :lng, :lat, presence: true
  validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"] }
  validates :route_type, inclusion: { in: ["Out & Back", "Loop", "Point-to-Point"] }
  

  has_one_attached :photo 

  has_many :reviews,
    foreign_key: :trail_id,
    class_name: :Review 

  # belongs_to :park,
  #   class_name: :Park
    
  def average_rating
    reviews.average(:star_rating).round(1)
  end
end
