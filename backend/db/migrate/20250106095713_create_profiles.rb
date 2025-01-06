class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :age, null: false
      t.date :birthday, null: false
      t.string :hometown, null: false
      t.text :description, null: false
      t.string :avatar, null: false
      t.string :github_url, null: false
      t.string :blog_url, null: false
      t.string :x_url, null: false
      t.string :qiita_url, null: false

      t.timestamps
    end
  end
end