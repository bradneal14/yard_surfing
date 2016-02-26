class AddColsToYards < ActiveRecord::Migration
  def change
    add_column :yards, :max_guest_num, :integer
    add_column :yards, :water_status, :boolean
    add_column :yards, :fire_status, :boolean
    add_column :yards, :toilet_status, :boolean
  end
end
