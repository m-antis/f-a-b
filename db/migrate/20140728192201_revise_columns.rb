class ReviseColumns < ActiveRecord::Migration
  def up
  	add_reference :locations, :organization
  	add_column :organizations, :for_profit?, :boolean
  	add_column :organizations, :email, :string
  end

  def down
  	remove_reference :locations, :organization_id
  	remove_column :organizations, :is_for_profit, :string
  	remove_column :organizations, :string, :string
  end
end
