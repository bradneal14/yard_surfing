# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(fname: "Bradley", lname: "Neal", email: "admin", password: "password")
User.create!(fname: "Mike", lname: "Jordan", email: "mjordan", password: "password")
User.create!(fname: "Buzz", lname: "Lightyear", email: "blightyear", password: "password")
User.create!(fname: "Jim", lname: "Weiss", email: "jweiss", password: "password")
User.create!(fname: "Dave", lname: "Neal", email: "dneal", password: "password")
User.create!(fname: "Nora", lname: "Boerding", email: "nora", password: "password")

Yard.create!(title: "West", description: "Golden Gate Park", lng: -122.487989, lat: 37.769556, user_id: 2)
Yard.create!(title: "South", description: "Delores Park", lng: -122.427406, lat: 37.760383, user_id: 6)
Yard.create!(title: "North", description: "Hyde st. Pier", lng: -122.421307, lat: 37.809131, user_id: 4)
Yard.create!(title: "East", description: "App Academy", lng: -122.394049, lat: 37.791118, user_id: 6)
Yard.create!(title: "Central", description: "Filmore Auditorium", lng: -122.433150, lat: 37.784145, user_id: 6)
Yard.create!(title: "Not Pictured", description: "Other Side of the world", lng: 122.433150, lat: 37.784145, user_id: 1)
Yard.create!(title: "Downtown", description: "Downtown", lng: -122.468147, lat: 37.746101, user_id: 1)
Yard.create!(title: "Delete me", description: "Delete Me", lng: -122.458167, lat: 37.746101, user_id: 2)
Yard.create!(title: "Delete me also", description: "delete me also!", lng: -122.478157, lat: 37.746101, user_id: 1)
Yard.create!(title: "Ho Chi Minh", description: "Hideout Hostel", lng: 106.691892, lat: 10.768099, user_id: 6)
Yard.create!(title: "Phong Nha", description: "Easy Tiger Hostel", lng: 106.310667, lat: 17.610048, user_id: 6)
