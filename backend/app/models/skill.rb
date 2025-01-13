class Skill < ApplicationRecord
  belongs_to :user
  has_many :abilities, dependent: :destroy
end
