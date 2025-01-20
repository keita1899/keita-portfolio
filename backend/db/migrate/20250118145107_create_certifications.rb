class CreateCertifications < ActiveRecord::Migration[7.0]
  def change
    create_table :certifications do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name, null: false
      t.string :acquired_date, null: false

      t.timestamps
    end
  end
end
