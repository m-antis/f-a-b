class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :is_for_profit
      t.string :string
      t.string :website
      t.string :telephone

      t.timestamps
    end
  end
end
