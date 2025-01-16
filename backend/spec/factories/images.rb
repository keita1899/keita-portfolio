FactoryBot.define do
  factory :image do
    association :portfolio
    url { Faker::LoremFlickr.image(size: "300x300", search_terms: ["portfolio"]) }
  end
end
