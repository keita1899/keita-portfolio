module UserFindable
  extend ActiveSupport::Concern

  def find_user
    User.find_by(email: "test1@example.com")
  end
end