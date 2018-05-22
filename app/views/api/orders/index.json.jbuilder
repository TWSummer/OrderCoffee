json.orders do
  json.array! @orders do |order|
    json.extract! order, :id, :coffee_name, :method, :quantity,
                  :unit, :priority, :ship_date, :notes
  end
end
json.count @total_items
