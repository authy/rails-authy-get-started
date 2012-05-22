class User < ActiveRecord::Base
  attr_accessible :authy_id, :email, :password
  attr_accessor :cellphone, :country_code, :token

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
    token = Authy::API.verify(:id => self.id, :token => token)

    token.ok?
  end

  def correct_password?(password)
    self.password == password
  end
end
