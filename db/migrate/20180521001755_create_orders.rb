class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :coffee_name
      t.string :method
      t.integer :quantity
      t.integer :unit
      t.boolean :priority
      t.date :ship_date
      t.string :notes
      t.timestamps
    end

    add_index :orders, :coffee_name
    add_index :orders, :method
    add_index :orders, :quantity
    add_index :orders, :unit
    add_index :orders, :priority
    add_index :orders, :ship_date
  end
end
