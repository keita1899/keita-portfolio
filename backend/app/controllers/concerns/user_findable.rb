module UserFindable
  extend ActiveSupport::Concern

  def set_user
    @user = User.find_by(email: "keita@example.com")
  end
end
