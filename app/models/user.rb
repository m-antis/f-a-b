class User < ActiveRecord::Base
  belongs_to :organization
  validates :email, presence: true
  validates :fname, presence: true
  validates :lname, presence: true
end
