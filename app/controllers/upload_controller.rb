class UploadController < ApplicationController
   def show
   end
   def index
   end
   def home
   end
   def new
     @product = Product.new
     #puts "ID ??????????????????%s"%[@id]
     #@uploader = ImagerUploader.new
   end
   def update
   end
   def read
   end
   def create
     vk = params[:product][:file1] 
     name = params[:product][:name]
     model = params[:product][:model]
     price = params[:product][:price]
     file = vk.original_filename
     if !vk.nil?
        @product = Product.create(name:name,model:model,price:price,file:file)
     end
     if !@product.valid?
        redirect_to action: 'new'
     end
     #pk.save

     tk2 = params[:product][:file2]
     tk3 = params[:product][:file3]
     tk4 = params[:product][:file4]
     tk5 = params[:product][:file5]
     #puts "NAME: ???????????????%s"%[pk.file]
     dir = File.dirname("#{Rails.root}/app/assets/images/#{@product.id}/#{vk.original_filename}")
     FileUtils.mkdir_p(dir)
     File.open(Rails.root.join('app','assets','images', @product.id.to_s,vk.original_filename),'wb+') do |file|
         file.write(vk.read)
     end
     vk = Upload.create(product_id: @product.id, file:@product.file)
     #vk.save
     if !tk2.nil?
        File.open(Rails.root.join('app','assets','images', @product.id.to_s,tk2.original_filename),'wb+') do |file|
           file.write(tk2.read)
        end
        vk = Upload.create(product_id:@product.id, file:tk2.original_filename)
        #vk.save
     end
     if !tk3.nil?
        File.open(Rails.root.join('app','assets','images', @product.id.to_s,tk3.original_filename),'wb+') do |file|
           file.write(tk3.read)
        end
        vk = Upload.create(product_id:@product.id, file:tk3.original_filename)
        #vk.save
     end
     if !tk4.nil?
        File.open(Rails.root.join('app','assets','images', @product.id.to_s,tk4.original_filename),'wb+') do |file|
           file.write(tk4.read)
        end
        vk = Upload.create(product_id:@product.id, file:tk4.original_filename)
        #vk.save
     end
     if !tk5.nil?
        File.open(Rails.root.join('app','assets','images', @product.id.to_s,tk5.original_filename),'wb+') do |file|
           file.write(tk5.read)
        end
        vk = Upload.create(product_id:@product.id, file:tk5.original_filename)
        #vk.save
     end
     
     if vk.save && @product.save
        redirect_to action:'index', controller:'main'
     end
   end

   def destroy
   end
end
