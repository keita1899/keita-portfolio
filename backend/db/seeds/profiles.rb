Profile.find_or_create_by!(
  user: User.find_by(email: "keita@example.com"),
  first_name: "慶太",
  last_name: "濱崎",
  age: 25,
  birthday: "1999-02-15",
  hometown: "兵庫県",
  description: "Webエンジニアを目指して勉強中です。書籍やudemyで学習しています。主に Rails と React・TypeScript でポートフォリオを作成しています。",
  avatar: "/images/avatar.png",
  github_url: "https://github.com/",
  blog_url: "https://keita1899.hatenablog.com/",
  x_url: "https://x.com/k1e8i9t9a",
  qiita_url: "https://qiita.com/keita1899",
)
