portfolios = [
  {
    user_id: User.find_by(email: "keita@example.com").id,
    name: "ポートフォリオサイト",
    thumbnail: "",
    description: "Rails と Next.js を使って、面接時に使うためのポートフォリオサイトを作りました。自分のデータだけ表示するので、フォームは作らずに手動でデータを登録するようにしています。",
    commitment: "Rails と Next.jsを使った SPA にして、SSG で表示するようにしました。",
    challenges: "Docker で開発を行い、Rails を Render で、Next.js を Vercel でデプロイしたので、どこでエラーが発生しているか見つけるのに苦労しました。また CORS や、環境変数等のデプロイや通信を行うための設定もあまり情報がなくて難しかったです。",
    demo_url: "https://keita-portfolio-gold.vercel.app",
    github_url: "https://github.com/keita1899/keita-portfolio",
    blog_url: "",
    duration: 14,
    images: [
      "",
      "",
      "",
      "",
      "",
    ],
    tech_stacks: [
      {
        technology: "Ruby",
        version: "3.1.2",
      },
      {
        technology: "Ruby on Rails",
        version: "7.0.8.7",
      },
      {
        technology: "Rubocop",
        version: "1.69.2",
      },
      {
        technology: "RSpec",
        version: "3.13.2",
      },
      {
        technology: "PostgreSQL",
        version: "16",
      },
      {
        technology: "TypeScript",
        version: "5.3.3",
      },
      {
        technology: "React",
        version: "18.2.0",
      },
      {
        technology: "Next.js",
        version: "^14.2.21",
      },
      {
        technology: "Jest",
        version: "^29.7.0",
      },
      {
        technology: "MaterialUI",
        version: "^5.15.11",
      },
      {
        technology: "Docker",
        version: "27.2.0",
      },
      {
        technology: "Render",
        version: "",
      },
      {
        technology: "Vercel",
        version: "",
      },
      {
        technology: "Github Actions",
        version: "",
      },
    ],
    features: [
      "Home ページ表示",
      "About ページ表示",
      "ポートフォリオ一覧表示",
      "ポートフォリオ詳細表示",
      "スキル一覧表示",
    ],
    pages: [
      "Home",
      "About",
      "ポートフォリオ一覧",
      "ポートフォリオ詳細",
      "スキル一覧",
    ],
    tags: [
      "Ruby on Rails",
      "TypeScript",
      "Next.js",
      "Docker",
    ],
  },
]

def create_portfolio(portfolio)
  portfolio_record = Portfolio.create!(
    user_id: portfolio[:user_id],
    name: portfolio[:name],
    thumbnail: portfolio[:thumbnail],
    description: portfolio[:description],
    commitment: portfolio[:commitment],
    challenges: portfolio[:challenges],
    demo_url: portfolio[:demo_url],
    github_url: portfolio[:github_url],
    blog_url: portfolio[:blog_url],
    duration: portfolio[:duration],
  )

  create_images(portfolio_record, portfolio[:images])
  create_tech_stacks(portfolio_record, portfolio[:tech_stacks])
  create_features(portfolio_record, portfolio[:features])
  create_pages(portfolio_record, portfolio[:pages])
  create_tags(portfolio_record, portfolio[:tags])
end

def create_images(portfolio, images)
  images.each do |image_url|
    Image.create!(portfolio_id: portfolio.id, url: image_url)
  end
end

def create_tech_stacks(portfolio, tech_stacks)
  tech_stacks.each do |tech_stack|
    TechStack.create!(portfolio_id: portfolio.id, technology: tech_stack[:technology], version: tech_stack[:version])
  end
end

def create_features(portfolio, features)
  features.each do |feature_name|
    Feature.create!(portfolio_id: portfolio.id, name: feature_name)
  end
end

def create_pages(portfolio, pages)
  pages.each do |page_name|
    Page.create!(portfolio_id: portfolio.id, name: page_name)
  end
end

def create_tags(portfolio, tags)
  tags.each do |tag_name|
    tag = Tag.find_by(name: tag_name)
    if tag
      PortfolioTag.create!(portfolio_id: portfolio.id, tag_id: tag.id)
    end
  end
end

portfolios.each do |portfolio|
  create_portfolio(portfolio)
end
