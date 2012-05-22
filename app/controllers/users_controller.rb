class UsersController < ApplicationController
  before_filter :authenticate

  def show
  end

  def enable_authy
  end

  def register_authy
    @authy_user = Authy::API.register_user(:email => current_user.email,
                                           :cellphone => params[:user][:cellphone],
                                           :country_code => params[:user][:country_code])

    if @authy_user.ok?
      current_user.authy_id = @authy_user.id
      current_user.save
    else
      @errors = @authy_user.errors
      render 'enable_authy'
    end
  end
end
