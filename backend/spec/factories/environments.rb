FactoryBot.define do
  factory :environment do
    association :user
    label { "OS" }
    name { "MacOS" }
  end
end
