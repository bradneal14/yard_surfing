class AddPhotosToUsers < ActiveRecord::Migration
  def change
    add_column :users, :main_pic_url, :string
    add_column :users, :thumb_pic_url, :string
  end
end
