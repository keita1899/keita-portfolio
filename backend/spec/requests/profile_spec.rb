require "rails_helper"

RSpec.describe "Profiles API", type: :request do
  let!(:user) { User.create!(email: "test@example.com", password: "password") }
  let!(:profile) do
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
  end

  describe "GET /show" do
    it "プロフィールの情報を返す" do
      get "/api/profile"

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)["first_name"]).to eq("慶太")
    end
  end
end
