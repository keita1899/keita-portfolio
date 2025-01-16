require "rails_helper"

RSpec.describe "Profiles API", type: :request do
  let!(:user) {
    User.find_or_create_by(email: "keita@example.com") do |user|
      user.password = "password"
    end
  }
  let!(:profile) { create(:profile, user: user) }

  describe "GET /show" do
    context "when profile exists" do
      it "returns all profile attributes" do
        get "/api/profile"

        expect(response).to have_http_status(:success)
        json = JSON.parse(response.body)

        expect(json).to include(
          "first_name" => profile.first_name,
          "last_name" => profile.last_name,
          "age" => profile.age,
          "birthday" => profile.birthday.as_json,
          "hometown" => profile.hometown,
        )
      end
    end

    context "when profile doesn't exist" do
      before { profile.destroy }

      it "returns not found status" do
        get "/api/profile"
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
