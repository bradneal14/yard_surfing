class CreateYards < ActiveRecord::Migration
  def change
    create_table :yards do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.text :description
      t.string :location
      t.float :lng
      t.float :lat
      t.text :about

      t.timestamps null: false
    end
  end
end
