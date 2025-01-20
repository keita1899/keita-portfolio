FactoryBot.define do
  factory :hobby do
    association :user
    name { "サッカー" }
    description { "小中高とサッカー部でした。" }
  end
end
