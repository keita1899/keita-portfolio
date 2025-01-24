class ApplicationController < ActionController::API
  private

    def find_user
      User.find_by(email: "keita@example.com")
    end
end
