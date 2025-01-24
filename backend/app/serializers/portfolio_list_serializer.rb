class PortfolioListSerializer < ActiveModel::Serializer
  attributes :id, :name, :thumbnail, :description

  has_many :tags, serializer: TagSerializer
end
