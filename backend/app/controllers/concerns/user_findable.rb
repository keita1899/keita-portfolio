module UserFindable
  extend ActiveSupport::Concern

  def find_user
    User.find_by(email: "keita@example.com")
  end
end
