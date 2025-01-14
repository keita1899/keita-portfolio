class Tag < ApplicationRecord
  has_many :portfolio_tags, dependent: :destroy
  has_many :portfolios, through: :portfolio_tags
end
