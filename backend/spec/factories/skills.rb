FactoryBot.define do
  factory :skill do
    association :user
    name { "Ruby" }
    logo_url { Faker::Internet.url }
  end
end
