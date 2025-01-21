class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :thumbnail, :description, :commitment, :challenges, :demo_url, :github_url, :blog_url, :duration

  has_many :images, serializer: ImageSerializer
  has_many :tech_stacks, serializer: TechStackSerializer
  has_many :features, serializer: FeatureSerializer
  has_many :pages, serializer: PageSerializer
  has_many :tags, serializer: TagSerializer
end
