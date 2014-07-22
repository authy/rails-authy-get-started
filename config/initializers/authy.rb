puts "Configuring authy"

Authy.api_uri = ENV['AUTHY_API_URL'] || "http://sandbox-api.authy.com"
Authy.api_key = ENV['AUTHY_API_KEY'] || "d57d919d11e6b221c9bf6f7c882028f" # rails example app on sandbox
