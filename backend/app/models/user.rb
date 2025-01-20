class User < ApplicationRecord
  has_one :profile, dependent: :destroy
  has_many :environments, dependent: :destroy
  has_many :skills, dependent: :destroy
  has_many :portfolios, dependent: :destroy
  has_many :careers, dependent: :destroy
  has_many :certifications, dependent: :destroy
  has_many :hobbies, dependent: :destroy

  has_secure_password
end
