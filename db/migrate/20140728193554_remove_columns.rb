class RemoveColumns < ActiveRecord::Migration
  def change
  	remove_reference :locations, :organization_id
  	remove_column :organizations, :is_for_profit, :string
  	remove_column :organizations, :string, :string
  end
end
