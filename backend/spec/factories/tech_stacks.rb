FactoryBot.define do
  factory :tech_stack do
    association :portfolio
    technology { Faker::ProgrammingLanguage.name }
    version { "#{Faker::Number.between(from: 1, to: 5)}.#{Faker::Number.between(from: 0, to: 9)}.#{Faker::Number.between(from: 0, to: 9)}" }
  end
end
