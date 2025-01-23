class Api::HomeController < ApplicationController
  include UserFindable

  before_action :set_user

  def index
    render json: {
      profile: ProfileDescriptionSerializer.new(@user.profile),
      portfolios: ActiveModelSerializers::SerializableResource.new(@user.portfolios, each_serializer: PortfolioListSerializer),
      skills: ActiveModelSerializers::SerializableResource.new(@user.skills, each_serializer: SkillListSerializer),
      environments: ActiveModelSerializers::SerializableResource.new(@user.environments, each_serializer: EnvironmentSerializer),
    }, status: :ok
  end
end
