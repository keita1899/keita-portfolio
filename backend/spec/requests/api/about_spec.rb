require "rails_helper"

RSpec.describe "Api::AboutController", type: :request do
  let!(:user) {
    User.find_or_create_by(email: "keita@example.com") do |user|
      user.password = "password"
    end
  }
  let!(:profile) { create(:profile, user: user) }
  let!(:careers) { create_list(:career, 3, user: user) }
  let!(:certifications) { create_list(:certification, 3, user: user) }
  let!(:hobbies) { create_list(:hobby, 3, user: user) }

  describe "GET /index" do
    before do
      get "/api/about"
    end

    it "returns status 200" do
      expect(response).to have_http_status(:ok)
    end

    it "returns profile data with the correct attributes" do
      json_response = JSON.parse(response.body)

      formatted_profile = profile.as_json(only: [:id, :last_name, :first_name, :age, :birthday, :hometown, :avatar, :description, :github_url, :blog_url,
                                                 :x_url, :qiita_url])
      formatted_profile["birthday"] = profile.birthday.strftime("%Y-%m-%d")

      expect(json_response["profile"]).to include(formatted_profile)
    end

    it "returns careers data with the correct attributes" do
      json_response = JSON.parse(response.body)

      expect(json_response["careers"].size).to eq(3)
      expect(json_response["careers"].first).to include(
        "id" => careers.first.id,
        "organization" => careers.first.organization,
        "detail" => careers.first.detail,
        "start_date" => careers.first.start_date.to_s,
        "end_date" => careers.first.end_date.to_s,
      )
    end

    it "returns certifications data with the correct attributes" do
      json_response = JSON.parse(response.body)

      expect(json_response["certifications"].size).to eq(3)
      expect(json_response["certifications"].first).to include(
        "id" => certifications.first.id,
        "name" => certifications.first.name,
        "acquired_date" => certifications.first.acquired_date.to_s,
      )
    end

    it "returns hobbies data with the correct attributes" do
      json_response = JSON.parse(response.body)

      expect(json_response["hobbies"].size).to eq(3)
      expect(json_response["hobbies"].first).to include(
        "id" => hobbies.first.id,
        "name" => hobbies.first.name,
        "description" => hobbies.first.description,
      )
    end
  end
end
