class Api::SkillsController < ApplicationController
  def index
    user = find_user
    render json: { error: "User not found" }, status: :not_found and return if user.nil?

    skills = user.skills
    render json: skills, each_serializer: SkillSerializer
  end
end
