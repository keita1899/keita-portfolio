environments = [
  {
    label: "OS",
    name: "MacOS",
  },
  {
    label: "エディタ",
    name: "VSCode、Cursor",
  },
  {
    label: "コマンドライン",
    name: "Warp",
  },
  {
    label: "ブラウザ",
    name: "Google Chrome、Arc",
  },
]

environments.each do |environment|
  Environment.find_or_create_by!(
    user: User.find_by(email: "keita@example.com"),
    label: environment[:label],
    name: environment[:name],
  )
end
