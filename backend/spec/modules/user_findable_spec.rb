require "rails_helper"

RSpec.describe UserFindable do
  let!(:user) { create(:user, email: "keita@example.com") }

  let(:dummy_class) do
    Class.new do
      include UserFindable
    end
  end

  describe "#set_user" do
    context "when the user exists" do
      it "sets @user to the found user" do
        instance = dummy_class.new
        instance.set_user
        expect(instance.instance_variable_get(:@user)).to eq(user)
      end
    end

    context "when the user does not exist" do
      it "raises ActiveRecord::RecordNotFound" do
        user.destroy!

        instance = dummy_class.new
        expect { instance.set_user }.to raise_error(
          ActiveRecord::RecordNotFound,
          "User not found",
        )
      end
    end
  end
end
