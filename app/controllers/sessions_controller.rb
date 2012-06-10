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

    if @user && @user.authenticate(params[:user][:password])
      #username and password is correct
      if(@user.authy_id != 0) #user is using two-factor
        Authy::API.request_sms(:id => @user.id) #request the API to send and sms.

        #Rails sessions are tamper proof. We can store the ID and that the password was already validated
        session[:password_validated] = true 
        session[:id] = @user.id

        
        redirect_to url_for(:controller => "sessions", :action => "two_factor_auth")
      else
        flash[:notice] = "Successfully authenticated without two-factor"
        redirect_to @user
      end
    else
      flash[:error] = "Wrong username, password."
      @user = User.new
      render 'new'
    end
  end

  def two_factor_auth
  end
  
  def create_two_factor_auth
    @user = User.find(session[:id])
    token = params[:token]
    if @user && session[:password_validated] && @user.verify_token(token) 
      sign_in(@user)
      flash[:success] = "Securely signed in using Authy"
      redirect_to @user
    else
      flash[:notice] = "Wrong token"
      redirect_to new_session_path
    end
  end

  def logout
    sign_out
    redirect_to root_path
  end

end
