class CreateAbilities < ActiveRecord::Migration[7.0]
  def change
    create_table :abilities do |t|
      t.text :content, null: false
      t.references :skill, null: false, foreign_key: true

      t.timestamps
    end
  end
end
