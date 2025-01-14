class CreateTechStacks < ActiveRecord::Migration[7.0]
  def change
    create_table :tech_stacks do |t|
      t.string :technology, null: false
      t.string :version, null: false
      t.references :portfolio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
