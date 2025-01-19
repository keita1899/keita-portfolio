class Api::ProfileController < ApplicationController
  include UserFindable

  before_action :set_user

  def show
    profile = @user.profile

    if profile
      render json: profile
    else
      render json: { error: "Profile not found" }, status: :not_found
    end
  end
end
