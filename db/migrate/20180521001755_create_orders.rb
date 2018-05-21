class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :coffee_name, null: false
      t.string :method, null: false
      t.integer :quantity, null: false
      t.integer :unit, null: false
      t.boolean :priority, null: false
      t.date :ship_date, null: false
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
