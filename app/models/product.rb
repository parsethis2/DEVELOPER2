class Product < ActiveRecord::Base
  has_many :line_items
  searchable do
    text :name, :stored=>true
    text :model, :stored=>true
  end
  validates :name, :model, :price, presence: true 
end
