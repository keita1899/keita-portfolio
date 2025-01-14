class Api::SkillsController < ApplicationController
  include UserFindable

  def index
    user = find_user
    return render json: { error: "User not found" }, status: :not_found unless user

    skills = find_skills(user)

    if skills.present?
      render json: skills.as_json(include: :abilities)
    else
      render json: { error: "Skill not found" }, status: :not_found
    end
  end

  private

    def find_skills(user)
      user.skills.includes(:abilities)
    end
end
