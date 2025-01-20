FactoryBot.define do
  factory :career do
    association :user
    organization { "関西大学" }
    detail { "商学部商学科" }
    start_date { "2017-04" }
    end_date { "2021-03" }
  end
end
