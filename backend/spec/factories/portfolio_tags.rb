FactoryBot.define do
  factory :portfolio_tag do
    association :portfolio
    association :tag
  end
end
