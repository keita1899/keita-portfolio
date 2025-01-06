FactoryBot.define do
  factory :profile do
    user { nil }
    first_name { "MyString" }
    last_name { "MyString" }
    age { 1 }
    birthday { "2025-01-06" }
    hometown { "MyString" }
    description { "MyText" }
    avatar { "MyString" }
    github_url { "MyString" }
    blog_url { "MyString" }
    x_url { "MyString" }
    qiita_url { "MyString" }
  end
end
