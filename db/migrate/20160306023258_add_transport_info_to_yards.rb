class AddTransportInfoToYards < ActiveRecord::Migration
  def change
    add_column :yards, :transport_info, :text
  end
end
