class CreateFeatures < ActiveRecord::Migration[7.0]
  def change
    create_table :features do |t|
      t.string :name, null: false
      t.references :portfolio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
