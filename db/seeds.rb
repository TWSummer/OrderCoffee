# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
coffee_names = ["Bella Donovan", "Giant Steps"]
methods = ["Aeropress", "Coffee Maker",
           "Cold Brew", "French Press", "Pour Over"]
units = [25, 50]
priorities = [true, false]


50.times do |i|
  Order.create(coffee_name: coffee_names.sample,
               method: methods.sample,
               quantity: 10,
               unit: units.sample,
               ship_date: Date.today - i.days,
               priority: priorities.sample)
end
