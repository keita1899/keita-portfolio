class CreateCareers < ActiveRecord::Migration[7.0]
  def change
    create_table :careers do |t|
      t.references :user, null: false, foreign_key: true
      t.string :organization, null: false
      t.string :detail, null: false
      t.date :start_date, null: false
      t.date :end_date

      t.timestamps
    end
  end
end
