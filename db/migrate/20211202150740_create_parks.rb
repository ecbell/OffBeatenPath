class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :park_name, null: false
      t.string :city
      t.string :state
      t.string :country, null: false 
      t.string :park_type
      t.integer :acreage
      t.text :park_description, null: false 
      t.string :contact
      t.text :park_hours
      t.float :lng, null: false
      t.float :lat, null: false 
      t.timestamps
    end

    add_index :parks, :park_name
  end
end
