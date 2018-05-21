# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_21_001755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.string "coffee_name", null: false
    t.string "method", null: false
    t.integer "quantity", null: false
    t.integer "unit", null: false
    t.boolean "priority", null: false
    t.date "ship_date", null: false
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_name"], name: "index_orders_on_coffee_name"
    t.index ["method"], name: "index_orders_on_method"
    t.index ["priority"], name: "index_orders_on_priority"
    t.index ["quantity"], name: "index_orders_on_quantity"
    t.index ["ship_date"], name: "index_orders_on_ship_date"
    t.index ["unit"], name: "index_orders_on_unit"
  end

end
