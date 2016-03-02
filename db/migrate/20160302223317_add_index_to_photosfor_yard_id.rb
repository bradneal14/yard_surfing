class AddIndexToPhotosforYardId < ActiveRecord::Migration
  def change
    add_index :yard_photos, :yard_id
  end
end
