class AddIndexToYards < ActiveRecord::Migration
  def change
    add_index :yards, :user_id
  end
end
