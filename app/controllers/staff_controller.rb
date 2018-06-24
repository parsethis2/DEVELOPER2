class StaffController < ApplicationController
  def index
    @page = Product.paginate(:page=>params[:page],:per_page=>10)
  end
  def new
  end
  def show
  end
  def create
    vk = params[:k_id]
    @row = Product.find(vk)
    name = params[:product][:name]
    model = params[:product][:model]
    price = params[:product][:price]
    @row.name = name
    @row.model = model
    @row.price = price
    if @row.valid?
       @row.save
       redirect_to action: 'index'
    else
    #puts "????????????%s"%[vk]
       redirect_to action: 'show', id: vk
    end
  end
  def update
  end
  def delete
  end
  def destroy
    vk = params[:k_id]
    #puts "?????????%s"%[vk]
    @row = Product.find(vk)
    @row.destroy
    redirect_to action: 'index'
  end
  def read
  end
  def show
    @vk = params[:id]
    #puts "?????????%s"%[vk]
    @row = Product.find(@vk)
    @upload = Upload.where(product_id:@vk)
    @name = @row.file
    @product_name = @row.name
    @product_model = @row.model
    @product_price = @row.price
    @product_id = @row.id
  end
end
