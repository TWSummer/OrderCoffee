class Order < ApplicationRecord
  validates :coffee_name, :method, :quantity, :unit,
            :ship_date, presence: true
  validates :coffee_name, inclusion: { in: ["Bella Donovan", "Giant Steps"] }
  validates :method, inclusion: { in: ["Aeropress", "Coffee Maker",
            "Cold Brew", "French Press", "Pour Over"] }
  validates :quantity, :unit,
            numericality: { only_integer: true, greater_than: 0 }
  
end
