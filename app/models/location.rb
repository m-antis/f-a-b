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

class Location < ActiveRecord::Base
  belongs_to :organization
  validates_presence_of :address, :zipcode, :state, :city
  geocoded_by :address
  after_validation :geocode #, if: ->(obj){ obj.address.present? and obj.address_changed? }
end


    def getFullAddress
      locations = Location.all
      a = []
        for i in locations
          a << "#{i.address} #{i.city}, #{i.state} #{i.zipcode} "
        end
        a
    end

    def address 
		[address, city, state, zipcode].compact.join(', ')
    end


    
