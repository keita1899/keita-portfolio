require "rails_helper"

RSpec.describe "Api::HomeController", type: :request do
  let!(:user) {
    User.find_or_create_by(email: "keita@example.com") do |user|
      user.password = "password"
    end
  }
  let!(:profile) { create(:profile, user: user) }
  let!(:portfolios) { create_list(:portfolio, 3, user: user) }
  let!(:tags) { create_list(:tag, 3) }
  let!(:skills) { create_list(:skill, 3, user: user) }
  let!(:environments) { create_list(:environment, 3, user: user) }

  before do
    portfolios.each do |portfolio|
      portfolio.tags << tags
    end
  end

  describe "GET /api/home" do
    before { get api_root_path }

    it "returns a successful response" do
      expect(response).to have_http_status(:ok)
    end

    it "returns profile data with the expected fields" do
      json_response = JSON.parse(response.body)

      expect(json_response["profile"]).to include(
        "description" => profile.description,
      )
    end

    it "returns portfolios with associated tags" do
      json_response = JSON.parse(response.body)

      expect(json_response["portfolios"].size).to eq(3)

      expect(json_response["portfolios"].first["tags"]).not_to be_empty
    end

    it "returns skills with expected fields" do
      json_response = JSON.parse(response.body)

      expect(json_response["skills"].size).to eq(3)
      expect(json_response["skills"].first).to include(
        "id" => skills.first.id,
        "name" => skills.first.name,
        "logo_url" => skills.first.logo_url,
      )
    end

    it "returns environments with expected fields" do
      json_response = JSON.parse(response.body)

      expect(json_response["environments"].size).to eq(3)
      expect(json_response["environments"].first).to include(
        "id" => environments.first.id,
        "label" => environments.first.label,
        "name" => environments.first.name,
      )
    end
  end
end
