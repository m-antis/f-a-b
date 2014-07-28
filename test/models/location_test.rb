# == Schema Information
#
# Table name: locations
#
#  id              :integer          not null, primary key
#  address         :string(255)
#  zipcode         :string(255)
#  state           :string(255)
#  city            :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#  organization_id :integer
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
