FactoryBot.define do
  factory :certification do
    association :user
    name { "日商簿記2級" }
    acquired_date { "2017-11" }
  end
end
