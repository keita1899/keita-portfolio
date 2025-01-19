hobbies = [
  {
    name: 'サッカー',
    description: '小中高とサッカー部でした。海外サッカーを見るのが好きです。',
  },
  {
    name: '釣り',
    description: 'ルアーで釣るのが好きです。',
  },
  {
    name: 'マリオカート',
    description: 'たまにオンラインで遊んでます。',
  },
]

hobbies.each do |hobby|
  Hobby.find_or_create_by!(
    user: User.find_by(email: "keita@example.com"),
    name: hobby[:name],
    description: hobby[:description],
  )
end

