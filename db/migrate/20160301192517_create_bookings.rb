class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :yard_id, null: false, index: true
      t.integer :requester_id, null: false, index: true
      t.text :message
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :num_guests, null: false

      t.timestamps null: false
    end
  end
end
