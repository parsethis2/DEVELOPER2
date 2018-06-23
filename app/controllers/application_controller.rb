class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  private
    def check_mobile
      if browser.device.mobile?
         #puts "?????????????Mobile"
      else
         puts "????????????%s"%[browser.device.to_s]
      end
    end
    def get_cart
      Cart.find(1)
      #puts ">>>>>>>>OK"
    rescue ActiveRecord::RecordNotFound
      cart = Cart.create
      puts "???????%s"%[cart.id]
      cart
    end
end
