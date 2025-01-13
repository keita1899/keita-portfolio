require "rails_helper"

RSpec.describe "Api::Skills", type: :request do
  let!(:user) { create(:user, email: "test@example.com", password: "password") }
  let!(:skills) { create_list(:skill, 5, user: user) }
  let!(:abilities) do
    skills.each do |skill|
      create_list(:ability, 3, skill: skill)
    end
  end

  describe "GET /index" do
    context "when skills exist" do
      it "returns a success response with skills" do
        get "/api/skills"

        expect(response).to have_http_status(:success)
        json = JSON.parse(response.body)

        expect(json.length).to eq(5)

        expect(json[0]["abilities"]).to be_present
      end
    end

    context "when skills doesn't exist" do
      before { user.skills.destroy_all }

      it "returns a not_found response with skill not found error" do
        get "/api/skills"
        expect(response).to have_http_status(:not_found)
        json = JSON.parse(response.body)
        expect(json["error"]).to eq("Skill not found")
      end
    end
  end
end
