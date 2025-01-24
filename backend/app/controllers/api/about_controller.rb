class Api::AboutController < ApplicationController
  def index
    user = find_user
    render json: { error: "User not found" }, status: :not_found and return if user.nil?

    render json: {
      profile: ProfileSerializer.new(user.profile),
      careers: ActiveModelSerializers::SerializableResource.new(user.careers, each_serializer: CareerSerializer),
      certifications: ActiveModelSerializers::SerializableResource.new(user.certifications, each_serializer: CertificationSerializer),
      hobbies: ActiveModelSerializers::SerializableResource.new(user.hobbies, each_serializer: HobbySerializer),
    }, status: :ok
  end
end
