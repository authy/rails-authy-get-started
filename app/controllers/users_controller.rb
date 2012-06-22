class UsersController < ApplicationController
  before_filter :authenticate, :only => [:show, :enable_authy, :register_authy]

  def show
  end
  
  def new
    sign_out
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      sign_in(@user)
      redirect_to current_user
    else
      render 'new'
    end
  end

  def enable_authy
  end

  def register_authy
    @authy_user = Authy::API.register_user(:email => current_user.email,
                                           :cellphone => params[:user][:cellphone],
                                           :country_code => params[:user][:country_code])

    if @authy_user.ok?
      current_user.authy_id = @authy_user.id
      current_user.save(:validate => false)
      flash[:modal] = "logout_modal"
      redirect_to current_user
    else
      @errors = @authy_user.errors
      render 'enable_authy'
    end
  end
end
