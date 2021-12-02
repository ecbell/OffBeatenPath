# == Schema Information
#
# Table name: parks
#
#  id               :bigint           not null, primary key
#  park_name        :string           not null
#  city             :string
#  state            :string
#  country          :string           not null
#  park_type        :string
#  acreage          :integer
#  park_description :text             not null
#  contact          :string
#  park_hours       :text
#  lng              :float            not null
#  lat              :float            not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class ParkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
