class CreateEnvironments < ActiveRecord::Migration[7.0]
  def change
    create_table :environments do |t|
      t.references :user, null: false, foreign_key: true
      t.string :label, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
