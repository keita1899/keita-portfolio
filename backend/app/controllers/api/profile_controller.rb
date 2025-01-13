class Api::ProfileController < ApplicationController
  def show
    user = find_user
    profile = user.profile

    if profile
      render json: profile
    else
      render json: { error: "Profile not found" }, status: :not_found
    end
  end

  private

    def find_user
      User.find_by(email: "test1@example.com")
    end
end
