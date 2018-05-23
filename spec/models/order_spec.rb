require 'rails_helper'

RSpec.describe Order, type: :model do
  describe("Validations") do
    it { should validate_presence_of(:coffee_name) }
    it { should validate_presence_of(:method) }
    it { should validate_presence_of(:quantity) }
    it { should validate_presence_of(:unit) }
    it { should validate_presence_of(:ship_date) }
    it { should validate_numericality_of(:quantity) }
    it { should validate_numericality_of(:unit) }
    it { should validate_inclusion_of(:coffee_name)
      .in_array(["Bella Donovan", "Giant Steps"]) }
    it { should validate_inclusion_of(:method)
      .in_array(["Aeropress", "Coffee Maker",
                 "Cold Brew", "French Press", "Pour Over"]) }
  end
end
