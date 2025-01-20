class Api::HomeController < ApplicationController
  include UserFindable

  before_action :set_user

  def index
    profile = @user.profile
    portfolios = @user.portfolios.includes(:tags)
    skills = @user.skills
    environments = @user.environments
    render json: {
      profile: profile.as_json(only: [:id, :description]),
      portfolios: portfolios.as_json(include: {
        tags: { only: [:id, :name] },
      }),
      skills: skills.as_json(only: [:id, :name, :logo_url]),
      environments: environments.as_json(only: [:id, :label, :name]),
    }, status: :ok
  end
end
