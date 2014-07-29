class User < ActiveRecord::Base
  belongs_to :organization
  has_secure_password
  validates_confirmation_of :password
  validates_presence_of :password, on: :create
  validates :email, presence: true, uniqueness: true
  validates :fname, presence: true
  validates :lname, presence: true
end
