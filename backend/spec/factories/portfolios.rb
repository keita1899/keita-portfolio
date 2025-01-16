FactoryBot.define do
  factory :portfolio do
    association :user
    name { Faker::App.name }
    thumbnail { Faker::LoremFlickr.image(size: "300x300") }
    description { Faker::Lorem.paragraph(sentence_count: 3) }
    commitment { Faker::Lorem.paragraph(sentence_count: 2) }
    challenges { Faker::Lorem.paragraph(sentence_count: 4) }
    demo_url { Faker::Internet.url(host: "demo.example.com") }
    github_url { Faker::Internet.url(host: "github.com", path: "/#{Faker::Internet.username}/#{Faker::App.name.parameterize}") }
    blog_url { Faker::Internet.url(host: "blog.example.com") }
    duration { Faker::Number.between(from: 7, to: 60) }
  end
end
