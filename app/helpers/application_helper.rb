module ApplicationHelper
   def header
     render "main/header"
   end
   def icon_link name
     #return "<link rel='icon' href='http://34.215.218.121:3000/main/"+name.to_s+"'>"
   end
   def footer
     render "main/footer"
   end
  
   def product_info info
     vk = Product.find(info)
     @title = vk.name
     @model = vk.model
     @price = vk.price
     @id = vk.id
     render "helpers/index"
   end
   def get_currency
     vk="CDN: "
   end
   def render_file abc
     if File.extname(abc) == '.png' || File.extname(abc)=='.jpg'
        return image_tag abc, class: 'product_png'
     end
     if File.extname(abc) == '.mp4'
        return video_tag abc, class: 'product_png'
     end
   end
   def render_file_detail abc
     if File.extname(abc) == '.png' || File.extname(abc)=='.jpg'
        return image_tag abc, id: 'detail_product_main_png'
        #video_tag abc, id: 'detail_product_main_video'
     end
     if File.extname(abc) == '.mp4'
        return video_tag abc, id: 'detail_product_main_video'
        #image_tag abc, id: 'detail_product_main_png', style: 'display:none'
     end
   end
   def render_detail_upload abc, kkk, k1
    if File.extname(abc) == '.png' || File.extname(abc)=='.jpg'
        return image_tag abc, onmouseover: "get("+"'"+kkk+"'"+","+k1.to_s+")", id: 'detail_product_png'
    else
        return video_tag abc, onmouseover: "get_video("+"'"+kkk+"'"+","+k1.to_s+")", id: 'detail_product_video'
    end
   end
   def render_main_png_file abc, vk
     return image_tag abc, id: 'detail_product_main_png',style: vk.to_s
   end
   def render_main_video_file abc, vk
     return video_tag abc, id: 'detail_product_main_video',style:vk.to_s
   end
   def render_video_start abc
     return image_tag abc, id:'video_start_control'
   end
   def detail_product_name abc
     return content_tag(:div, abc, :class=>'detail_product_name')
   end
   def detail_product_price abc
     return content_tag(:div, "CND: "+abc.to_s, :class=>'detail_product_price')
   end
   def add_to_cart abc
       button_to "ADD TO CART", url_for(action:'create', controller:'cart',id:abc),id:'detail_add_cart' 
   end
   def update_item abc
       button_to "UPDATE", url_for(action:'create',controller:'staff'),id:'detail_update_item'
   end
   def delete_item abc
       button_to "DELETE", url_for(action:'destroy',controller:'staff', k_id:abc), id:'detail_delete_item'
   end 
   
end
