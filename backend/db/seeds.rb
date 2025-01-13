user = User.create!(
  email: "test1@example.com",
  password: "password",
  password_confirmation: "password",
)

Profile.create!(
  user: user,
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

skills_with_abilities = [
  {
    name: "Ruby",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
    abilities: [
      "基本的な文法やオブジェクト指向を理解している",
      "Rubocop で静的解析を導入できる",
      "RSpec で基本的なテストを書ける",
    ],
  },
  {
    name: "Rails",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    abilities: [
      "CRUD や Web アプリの主要な機能を実装できる",
      "Devise で認証機能を実装できる",
      "gem を使わずに実装する認証機能の仕組みを理解している",
      "API を作れる",
    ],
  },
  {
    name: "SQL",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    abilities: [
      "基本的な CRUD 操作ができる",
      "基本的な検索ができる",
      "正規化ができる",
      "インデックスや制約、データ型について理解している",
      "トランザクションをざっくり理解している",
    ],
  },
  {
    name: "HTML",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    abilities: [
      "基本的なタグを理解している",
    ],
  },
  {
    name: "CSS",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    abilities: [
      "基本的なスタイルを理解している",
      "FlexBox や Grid を使ってレスポンシブデザインを作れる",
      "BEM のような CSS 設計をざっくり理解している",
      "Sass を使える",
    ],
  },
  {
    name: "JavaScript",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    abilities: [
      "基本的な文法を理解している",
      "オブジェクトについて理解している（プロトタイプとクラス）",
      "関数の違いを理解している",
      "this の挙動について理解している",
      "非同期処理についてざっくり理解している",
      "基本的な DOM 操作ができる",
      "ES6 の記法を理解して、React で使える",
      "npm、yarn のパッケージ管理ツールを扱える",
      "基本的な Webpack の操作ができる",
      "ESLint、Prettier を使って静的解析とコードの整形ができる",
    ],
  },
  {
    name: "TypeScript",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    abilities: [
      "基本的な型について理解している",
      "型エイリアスやインターフェースを使える",
      "ジェネリクスを使える",
    ],
  },
  {
    name: "React",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    abilities: [
      "React の概念、メリットを理解している（仮想 DOM、宣言的 UI、コンポーネント指向、単方向データフロー）",
      "基本を理解している（コンポーネント、JSX、state、props、再レンダリング）",
      "クラスコンポーネントと関数コンポーネントの違いについて理解している",
      "基本的な Hooks の使い方を理解している（useState、useEffect、useReducer、useContext 等）",
      "React Router でルーティングを実装できる",
      "MaterialUI のようなコンポーネントライブラリや、TailwindCSS のような CSS フレームワークでスタイルを作れる",
    ],
  },
  {
    name: "Next.js",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    abilities: [
      "レンダリングの違いを理解している",
      "ルーティングの仕組みを理解している",
      "環境変数を扱える",
    ],
  },
  {
    name: "Github",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    abilities: [
      "コミットしてローカルに保存できる",
      "リモートリポジトリにプッシュして保存できる",
      "プルリクエストを作れる",
      "Github Flow でブランチを管理できる",
    ],
  },
  {
    name: "Github Actions",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    abilities: [
      "ワークフロー、ジョブ、ステップ等の基本を理解している",
      "Rails や React の CI を構築できる",
    ],
  },
  {
    name: "Linux",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    abilities: [
      "基本的なコマンドを使える",
      "カーネルやシェルの仕組みを理解している",
      "基本的なディレクトリについて理解している",
      "vim の基本的な操作ができる",
      "yum や apt を使ったパッケージの操作ができる",
      "権限について理解している",
    ],
  },
  {
    name: "Docker",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    abilities: [
      "基本的なコマンドを使える",
      "Dockerfile、docker-compose.yml の基本的な命令の意味を理解している",
      "イメージからコンテナを作成し、操作できる",
      "Docker Compose を使える",
      "Rails や React の開発環境を構築できる",
    ],
  },
]

skills_with_abilities.each do |skill_data|
  skill = Skill.create!(
    user_id: user.id,
    name: skill_data[:name],
    logo_url: skill_data[:logo_url],
  )

  skill_data[:abilities].each do |ability_content|
    Ability.create!(skill_id: skill.id, content: ability_content)
  end
end
