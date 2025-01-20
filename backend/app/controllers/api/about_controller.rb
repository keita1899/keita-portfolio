class Api::AboutController < ApplicationController
  include UserFindable

  before_action :set_user

  def index
    profile = @user.profile
    careers = @user.careers
    certifications = @user.certifications
    hobbies = @user.hobbies
    render json: {
      profile: profile.as_json(only: [:id, :last_name, :first_name, :age, :birthday, :hometown, :avatar, :description, :github_url, :blog_url, :x_url,
                                      :qiita_url]),
      careers: careers.as_json(only: [:id, :organization, :detail, :start_date, :end_date]),
      certifications: certifications.as_json(only: [:id, :name, :acquired_date]),
      hobbies: hobbies.as_json(only: [:id, :name, :description]),
    }, status: :ok
  end
end
