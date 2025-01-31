require "rails_helper"

RSpec.describe "Api::Skills", type: :request do
  let!(:user) {
    User.find_or_create_by(email: "keita@example.com") do |user|
      user.password = "password"
    end
  }
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

      it "returns an empty array" do
        get "/api/skills"
        expect(response).to have_http_status(:ok)
        json = JSON.parse(response.body)
        expect(json).to eq([])
      end
    end
  end
end
