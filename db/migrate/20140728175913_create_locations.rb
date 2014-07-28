class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :address
      t.string :zipcode
      t.string :state
      t.string :city
      t.references :organization_id, index: true

      t.timestamps
    end
  end
end
