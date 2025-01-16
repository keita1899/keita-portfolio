class User < ApplicationRecord
  has_one :profile, dependent: :destroy
  has_many :skills, dependent: :destroy
  has_many :portfolios, dependent: :destroy

  has_secure_password
end
