class CartController < ApplicationController
   def index
   end
   def show
   end
   def new
   end
   def create
     @cart = get_cart
     if @cart.nil?
        puts "NILL CART"
     end
     @product = Product.find(params[:id])
     @line_item = @cart.add_stuff @product.id
     if @line_item.save
        redirect_to action: 'index', controller:'main'
     else
        puts "?????? ERROR CART ITEM"
     end
   end
   def update
   end
   def destroy
   end
end
