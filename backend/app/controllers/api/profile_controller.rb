class Api::ProfileController < ApplicationController
  include UserFindable

  def show
    user = find_user
    profile = user.profile

    if profile
      render json: profile
    else
      render json: { error: "Profile not found" }, status: :not_found
    end
  end
end
