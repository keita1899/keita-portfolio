certifications = [
  {
    name: '日商簿記2級',
    acquired_date: '2017-11',
  },
  {
    name: 'TOEIC 675',
    acquired_date: '2021-01',
  },
]

certifications.each do |certification|
  Certification.find_or_create_by!(
    user: User.find_by(email: "keita@example.com"),
    name: certification[:name],
    acquired_date: certification[:acquired_date],
  )
end
