class Api::SkillsController < ApplicationController
  include UserFindable

  before_action :set_user

  def index
    skills = @user.skills.includes(:abilities)

    if skills.present?
      render json: skills.as_json(include: :abilities)
    else
      render json: { error: "Skill not found" }, status: :not_found
    end
  end
end
