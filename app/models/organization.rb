# == Schema Information
#
# Table name: organizations
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  website     :string(255)
#  telephone   :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  for_profit? :boolean
#  email       :string(255)
#

class Organization < ActiveRecord::Base
	has_many :locations, dependent: :destroy
	validates_uniqueness_of :name
	validates_presence_of :name

end
