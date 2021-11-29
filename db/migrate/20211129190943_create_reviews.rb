class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :trail_id, null: false
      t.integer :star_rating, null: false
      t.string :activity_type, null: false
      t.date :activity_date, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :trail_id
  end
end
