class ChangeStartAndEndDateToStringInCareers < ActiveRecord::Migration[7.0]
  def up
    change_column :careers, :start_date, :string
    change_column :careers, :end_date, :string
  end

  def down
    change_column :careers, :start_date, :date
    change_column :careers, :end_date, :date
  end
end