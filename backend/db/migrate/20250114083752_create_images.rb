class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :url, null: false
      t.references :portfolio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
