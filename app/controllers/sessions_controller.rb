class SessionsController < ApplicationController
  def index
  end

  def new
    if signed_in?
      redirect_to current_user and return
    end
    @user = User.new
  end

  def create
    @user = User.find_by_email(params[:user][:email])

    if @user
      result, flag = @user.authenticate(params[:user][:password], params[:user][:token])

      if result #auth succedded
        sign_in @user
        session[:password] = nil
        flash[:notice] = "Successfully authenticated securely using Authy!"
        redirect_to @user
      elsif flag == :two_factor
        session[:password] = params[:user][:password]

        # send sms
        Authy::API.request_sms(:id => @user.id)

        # go to second factor screen
        redirect_to url_for(:controller => "sessions", :action => "two_step", :email => @user.email)
      else
        flash[:error] = "wrong username, password or token."
        @user = User.new
        render 'new'
      end
    else
      @user = User.new
      render 'new'
    end
  end

  def two_step
    @password = session[:password]
    @email = params[:email]

    @user = User.new
  end

  def logout
    sign_out
    redirect_to root_path
  end

end
