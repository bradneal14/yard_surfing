class AddColsToYards2 < ActiveRecord::Migration
  def change
    add_column :yards, :shower_status, :boolean
  end
end
