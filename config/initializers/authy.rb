puts "Configuring authy"

Authy.api_uri = ENV['AUTHY_API_URL'] || "http://sandbox-api.authy.com"
Authy.api_key = ENV['AUTHY_API_KEY'] || "772f064cfb3898cd29050768267bee1b" # rails example app on sandbox
