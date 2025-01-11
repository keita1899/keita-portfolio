class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name, null: false
      t.string :logo_url, null: false

      t.timestamps
    end
  end
end
