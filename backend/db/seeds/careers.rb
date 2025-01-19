careers = [
  {
    organization: '関西大学',
    detail: '商学部商学科',
    start_date: '2017-04',
    end_date: '2021-03',
  },
]

careers.each do |carrer|
  Career.find_or_create_by!(
    user: User.find_by(email: "keita@example.com"),
    organization: carrer[:organization],
    detail: carrer[:detail],
    start_date: carrer[:start_date],
    end_date: carrer[:end_date],
  )
end

