class AddOwnerPicToYards < ActiveRecord::Migration

  def change
    add_column :yards, :owner_pic_url, :string
  end

end
