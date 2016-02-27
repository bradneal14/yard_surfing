# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(fname: "Mike", lname: "Jordan", email: "mjordan", password: "password")
User.create!(fname: "Buzz", lname: "Lightyear", email: "blightyear", password: "password")
User.create!(fname: "Jim", lname: "Weiss", email: "jweiss", password: "password")
User.create!(fname: "Dave", lname: "Neal", email: "dneal", password: "password")
User.create!(fname: "Bradley", lname: "Neal", email: "admin", password: "password")

Yard.create!(title: "West", description: "Golden Gate Park", lng: -122.487989, lat: 37.769556, user_id: 2)
Yard.create!(title: "South", description: "Delores Park", lng: -122.427406, lat: 37.760383, user_id: 3)
Yard.create!(title: "North", description: "Hyde st. Pier", lng: -122.421307, lat: 37.809131, user_id: 4)
Yard.create!(title: "East", description: "App Academy", lng: -122.394049, lat: 37.791118, user_id: 3)
Yard.create!(title: "Central", description: "Filmore Auditorium", lng: -122.433150, lat: 37.784145, user_id: 1)
