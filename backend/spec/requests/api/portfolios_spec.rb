require "rails_helper"

RSpec.describe "Api::PortfoliosController", type: :request do
  describe "GET /api/portfolios" do
    let!(:user) {
      User.find_or_create_by(email: "keita@example.com") do |user|
        user.password = "password"
      end
    }

    context "when user is found" do
      let!(:portfolio) { create(:portfolio, user: user) }
      let!(:features) { create_list(:feature, 3, portfolio: portfolio) }
      let!(:pages) { create_list(:page, 2, portfolio: portfolio) }
      let!(:images) { create_list(:image, 2, portfolio: portfolio) }
      let!(:tech_stacks) { create_list(:tech_stack, 2, portfolio: portfolio) }
      let!(:tags) { create_list(:tag, 2) }
      before do
        portfolio.tags << tags
        allow_any_instance_of(Api::PortfoliosController).to receive(:find_user).and_return(user)
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
        expect(portfolio_data["features"].size).to eq(features.size)
        expect(portfolio_data["pages"].size).to eq(pages.size)
        expect(portfolio_data["images"].size).to eq(images.size)
        expect(portfolio_data["tech_stacks"].size).to eq(tech_stacks.size)
        expect(portfolio_data["tags"].size).to eq(tags.size)
      end
    end

    context "when user is not found" do
      before do
        allow_any_instance_of(Api::PortfoliosController).to receive(:find_user).and_raise(ActiveRecord::RecordNotFound)
        get "/api/portfolios"
      end

      it "returns status 404" do
        expect(response).to have_http_status(:not_found)
      end

      it "returns an error message" do
        json_response = JSON.parse(response.body)
        expect(json_response["error"]).to eq("User not found")
      end
    end

    context "when user has no portfolios" do
      before do
        allow_any_instance_of(Api::PortfoliosController).to receive(:find_user).and_return(user)
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
end
