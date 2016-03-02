class Photos < ActiveRecord::Migration
  def change
    create_table :yard_photos do |t|
      t.integer :yard_id, null: false
      t.string :yard_pic_url, null: false

      t.timestamps null: false
    end
  end
end
