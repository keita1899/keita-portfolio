class Api::HomeController < ApplicationController
  def index
    user = find_user
    render json: { error: "User not found" }, status: :not_found and return if user.nil?

    render json: {
      profile: ProfileDescriptionSerializer.new(user.profile),
      portfolios: ActiveModelSerializers::SerializableResource.new(user.portfolios, each_serializer: PortfolioListSerializer),
      skills: ActiveModelSerializers::SerializableResource.new(user.skills, each_serializer: SkillListSerializer),
      environments: ActiveModelSerializers::SerializableResource.new(user.environments, each_serializer: EnvironmentSerializer),
    }, status: :ok
  end
end
