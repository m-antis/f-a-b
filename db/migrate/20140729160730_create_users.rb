class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.references :organization, index: true
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
