class MainController < ApplicationController
  before_action :check_mobile
  def index
    #@database = Product.all
    @page = Product.paginate(:page => params[:page], :per_page=>10)
    render "home"
  end
  def show 
  end
  def new
  end
  def create
    vk = params['search_input']
    #puts "NAME :??????????????????%s"%[vk]
    @search = Product.search do
      fulltext vk do
        fields(:name)
      end
    end
    kkk = @search.results
    if @search.total < 1
     render 'norecord'
    end
    pkk = kkk.map do |k|
     {name:k.name}
    end
  end
  def read
  end
  def update
  end
  def destroy
  end
  def download
    send_file('/home/ec2-user/test1.tar.gz',:type=>'text/html')
  end
  def download2
    send_file('/home/ec2-user/test2.tar.gz',:type=>'text/html')
  end
  def header
  end
  def home
    
  end
  def contact
  end
  def about
  end
  def logo
    send_file('/home/ec2-user/test1/app/assets/images/logo.png')
  end
end
