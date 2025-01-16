FactoryBot.define do
  factory :page do
    association :portfolio
    name { Faker::Lorem.word.capitalize }
  end
end
