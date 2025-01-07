class Api::ProfileController < ApplicationController
  def show
    user = User.find_by(email: "test@example.com")
    @profile = user.profile

    if @profile
      render json: @profile
    else
      render json: { error: "Profile not found" }, status: :not_found
    end
  end
end
