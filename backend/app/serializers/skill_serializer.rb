class SkillSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo_url
  has_many :abilities, serializer: AbilitySerializer
end
