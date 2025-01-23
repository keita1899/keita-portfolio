class Api::SkillsController < ApplicationController
  include UserFindable

  before_action :set_user

  def index
    skills = @user.skills

    if skills.present?
      render json: skills, each_serializer: SkillSerializer
    else
      render json: { error: "Skill not found" }, status: :not_found
    end
  end
end
