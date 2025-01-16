User.find_or_create_by!(email: "keita@example.com") do |user|
  user.password = "password"
  user.password_confirmation = "password"
end
