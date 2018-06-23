class DetailController < ApplicationController
   def index
   end
   def show
     @vk = params[:id]
     row = Product.find(@vk)
     @upload = Upload.where(product_id:@vk)
     @name = row.file
     @product_name = row.name
     @product_model = row.model
     @product_price = row.price
     @product_id = row.id
   end
   def new
   end
   def update
   end
   def create
   end
   def read
   end
   def destroy
   end
end
