class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :first_name, :age, :birthday, :hometown, :avatar, :description, :github_url, :blog_url, :x_url,
             :qiita_url
end
