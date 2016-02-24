class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text :description
      t.string :location
      t.string :gender
      t.date :birthday

      t.timestamps null: false
    end
  end
end
