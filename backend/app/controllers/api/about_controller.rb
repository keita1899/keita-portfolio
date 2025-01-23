class Api::AboutController < ApplicationController
  include UserFindable

  before_action :set_user

  def index
    render json: {
      profile: ProfileSerializer.new(@user.profile),
      careers: ActiveModelSerializers::SerializableResource.new(@user.careers, each_serializer: CareerSerializer),
      certifications: ActiveModelSerializers::SerializableResource.new(@user.certifications, each_serializer: CertificationSerializer),
      hobbies: ActiveModelSerializers::SerializableResource.new(@user.hobbies, each_serializer: HobbySerializer),
    }, status: :ok
  end
end
