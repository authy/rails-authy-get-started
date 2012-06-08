class User < ActiveRecord::Base
  attr_accessible :authy_id, :email, :password, :password_confirmation
  attr_accessor :cellphone, :country_code, :token, :password_confirmation 
  

  validates_presence_of :email
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates_presence_of :password
  validates_presence_of :password_confirmation

  def authenticate(password, token)
    return false if !self.correct_password?(password)

    # Now check if user has two-factor authentication enabled
    if self.authy_id.to_i != 0 # it means user is using authy
      if token == nil
        return false, :two_factor
      else
        return verify_token(token)
      end
    end
    return true
  end

  def verify_token(token)
    token = Authy::API.verify(:id => self.authy_id, :token => token)

    token.ok?
  end

  def correct_password?(password)
    self.password == password
  end
end
