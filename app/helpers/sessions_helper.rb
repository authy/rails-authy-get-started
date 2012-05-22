
module SessionsHelper
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def current_user?(user)
    user == current_user
  end

  def sign_in(user)
    session[:user_id] = user.id
    current_user = user
  end

  def sign_out
    session[:user_id] = nil
    current_user = nil
  end

  def signed_in?
    !!current_user
  end

  def current_user=(user)
    @current_user = user
  end

  def authenticate
    deny_access unless signed_in?
  end

  def deny_access
    flash[:error] = "You need to sign in"
    redirect_to root_path
  end
end
