class AddWaypointsToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :waypoints, :string
  end
end
