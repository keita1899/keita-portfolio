class CreatePortfolios < ActiveRecord::Migration[7.0]
  def change
    create_table :portfolios do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name, null: false
      t.string :thumbnail, null: false
      t.text :commitment, null: false
      t.text :challenges, null: false
      t.text :description, null: false
      t.string :demo_url, null: false
      t.string :github_url, null: false
      t.string :blog_url, null: false
      t.integer :duration, null: false

      t.timestamps
    end
  end
end
