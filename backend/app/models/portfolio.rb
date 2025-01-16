class Portfolio < ApplicationRecord
  belongs_to :user
  has_many :features, dependent: :destroy
  has_many :pages, dependent: :destroy
  has_many :images, dependent: :destroy
  has_many :tech_stacks, dependent: :destroy
  has_many :portfolio_tags, dependent: :destroy
  has_many :tags, through: :portfolio_tags
end
