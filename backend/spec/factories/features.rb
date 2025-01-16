FactoryBot.define do
  factory :feature do
    association :portfolio
    name { Faker::Lorem.sentence(word_count: 3) }
  end
end
