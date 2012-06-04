# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ENV['DEFAULT_EMAIL'] ||= "example@email.com"
ENV['DEFAULT_PASSWORD'] ||= "key"
ENV['DEFAULT_COUNTRY_CODE'] ||= "1"
ENV['DEFAULT_CELLPHONE'] ||= "555-555-5555"

user = User.where(:email => ENV['DEFAULT_EMAIL']).first
if !user
  user = User.new(:email => ENV['DEFAULT_EMAIL'], :password => ENV['DEFAULT_PASSWORD'])
end

authy = Authy::API.register_user(:email => ENV['DEFAULT_EMAIL'], :country_code => ENV['DEFAULT_COUNTRY_CODE'], :cellphone => ENV['DEFAULT_CELLPHONE'])
user.authy_id = authy.id
user.save
