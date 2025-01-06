class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.date :birthday
      t.string :hometown
      t.text :description
      t.string :avatar
      t.string :github_url
      t.string :blog_url
      t.string :x_url
      t.string :qiita_url

      t.timestamps
    end
  end
end
