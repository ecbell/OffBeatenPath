class AddTrailCol < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :details, :text
  end
end
