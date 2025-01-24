class CareerSerializer < ActiveModel::Serializer
  attributes :id, :organization, :detail, :start_date, :end_date
end
