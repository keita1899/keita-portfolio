require "rails_helper"

RSpec.describe "Api::PortfoliosController", type: :request do
  describe "GET /api/portfolios" do
    let!(:user) {
      User.find_or_create_by(email: "keita@example.com") do |user|
        user.password = "password"
      end
    }

    context "when user has portfolios" do
      let!(:portfolio) { create(:portfolio, user: user) }
      let!(:features) { create_list(:feature, 3, portfolio: portfolio) }
      let!(:pages) { create_list(:page, 2, portfolio: portfolio) }
      let!(:images) { create_list(:image, 2, portfolio: portfolio) }
      let!(:tech_stacks) { create_list(:tech_stack, 2, portfolio: portfolio) }
      let!(:tags) { create_list(:tag, 2) }
      before do
        portfolio.tags << tags
        get "/api/portfolios"
      end

      it "returns status 200" do
        expect(response).to have_http_status(:ok)
      end

      it "returns the portfolios with associated data" do
        json_response = JSON.parse(response.body)

        expect(json_response).to be_an(Array)
        expect(json_response.size).to eq(1)

        portfolio_data = json_response.first
        expect(portfolio_data["tags"].size).to eq(tags.size)
      end
    end

    context "when user has no portfolios" do
      before do
        get "/api/portfolios"
      end

      it "returns status 200" do
        expect(response).to have_http_status(:ok)
      end

      it "returns an empty array" do
        json_response = JSON.parse(response.body)
        expect(json_response).to eq([])
      end
    end
  end

  describe "GET /api/portfolios/:id" do
    let!(:user) {
      User.find_or_create_by(email: "keita@example.com") do |user|
        user.password = "password"
      end
    }

    context "when the portfolio exists" do
      let!(:portfolio) { create(:portfolio, user: user) }

      it "returns status 200 and the portfolio data" do
        get "/api/portfolios/#{portfolio.id}"
        expect(response).to have_http_status(:ok)

        json_response = JSON.parse(response.body)
        expect(json_response["id"]).to eq(portfolio.id)
        expect(json_response["name"]).to eq(portfolio.name)
      end
    end

    context "when the portfolio does not exist" do
      it "returns status 404 and an error message" do
        nonexistent_portfolio_id = "9999"
        get "/api/portfolios/#{nonexistent_portfolio_id}"
        json_response = JSON.parse(response.body)

        expect(response).to have_http_status(:not_found)
        expect(json_response["error"]).to eq("Portfolio not found")
      end
    end
  end
end
