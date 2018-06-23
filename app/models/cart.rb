class Cart < ApplicationRecord
  has_many :line_items, dependent: :destroy
  def add_stuff abc
    item = line_items.find_by_product_id(abc)
    if item
     puts "??????? INCREASE STUFF"
     item.quantity = item.quantity + 1
    else
     puts "??????? ADD STUFF"
     item = line_items.build(product_id: abc)
    end
    item
  end
end
