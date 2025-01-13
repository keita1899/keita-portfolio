FactoryBot.define do
  factory :skill do
    user
    name { "Ruby" }
    logo_url { "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" }
  end
end
