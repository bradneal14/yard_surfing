# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(fname: "Connor", lname: "Jones", email: "cjones@gmail.com", password: "password")
User.create!(fname: "John", lname: "Rupp", email: "jrupp@gmail.com", password: "password")
User.create!(fname: "Geoff", lname: "Marks", email: "gmarks@gmail.com", password: "password")
User.create!(fname: "Steve", lname: "Harris", email: "sharris@gmail.com", password: "password")


Yard.create!(title: "West", description: "Golden Gate Park", lng: -122.487989, lat: 37.769556, user_id: 2)
Yard.create!(title: "South", description: "Delores Park", lng: -122.427406, lat: 37.760383, user_id: 3)
Yard.create!(title: "North", description: "Hyde st. Pier", lng: -122.421307, lat: 37.809131, user_id: 4)
Yard.create!(title: "East", description: "App Academy", lng: -122.394049, lat: 37.791118, user_id: 3)
Yard.create!(title: "Central", description: "Filmore Auditorium", lng: -122.433150, lat: 37.784145, user_id: 1)
