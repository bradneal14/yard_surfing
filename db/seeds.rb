# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(fname: "Bradley", lname: "Neal", email: "admin", password: "password", main_pic_url: "https://scontent.fsjc1-2.fna.fbcdn.net/hphotos-xfa1/t31.0-8/11539089_10152870304100738_943635186343598068_o.jpg")
User.create!(fname: "Mike", lname: "Jordan", email: "mjordan", password: "password", main_pic_url: "http://4.kicksonfire.net/wp-content/uploads/2015/09/Michael-Jordan-Made-More-Money-On-Sneakers-Last-Year-Alone-Than-He-Did-His-Entire-NBA-Career.jpg?6ce6a3")
User.create!(fname: "Buzz", lname: "Lightyear", email: "blightyear", password: "password", main_pic_url: "http://ecx.images-amazon.com/images/I/61OEzTAOczL._SL1000_.jpgS")
User.create!(fname: "Louis", lname: "CK", email: "louisck", password: "password", main_pic_url: "http://media.salon.com/2012/11/louis_ck_slide.jpg")
User.create!(fname: "Alex", lname: "Ovechkin", email: "aovechkin", password: "password", gender: "male")
User.create!(fname: "Nora", lname: "Boerding", email: "nora", password: "password", main_pic_url: "https://softbulletindotcom.files.wordpress.com/2012/07/img_0907.jpg")

Yard.create!(title: "West", description: "Golden Gate Park", lng: -122.487989, lat: 37.769556, user_id: 2)
Yard.create!(title: "South", description: "Delores Park", lng: -122.427406, lat: 37.760383, user_id: 5)
Yard.create!(title: "North", description: "Hyde st. Pier", lng: -122.421307, lat: 37.809131, user_id: 4)
Yard.create!(title: "East", description: "App Academy", lng: -122.394049, lat: 37.791118, user_id: 1)
Yard.create!(title: "Central", description: "Filmore Auditorium", lng: -122.433150, lat: 37.784145, user_id: 1)
Yard.create!(title: "Not Pictured", description: "Other Side of the world", lng: 122.433150, lat: 37.784145, user_id: 1)
Yard.create!(title: "Downtown", description: "Downtown", lng: -122.468147, lat: 37.746101, user_id: 1)
Yard.create!(title: "Delete me", description: "Delete Me", lng: -122.458167, lat: 37.746101, user_id: 2)
Yard.create!(title: "Delete me also", description: "delete me also!", lng: -122.478157, lat: 37.746101, user_id: 1)
Yard.create!(title: "Ho Chi Minh", description: "Hideout Hostel", lng: 106.691892, lat: 10.768099, user_id: 6)
Yard.create!(title: "Phong Nha", description: "Easy Tiger Hostel", lng: 106.310667, lat: 17.610048, user_id: 6)
Yard.create!(title: "Tempelhof", description: "Berlin Park", lng: 13.391921, lat: 52.472142, user_id: 6)

YardPhoto.create!(yard_id: 1, yard_pic_url: "http://p.rdcpix.com/v03/l7c686e43-m0xd-w640_h480_q80.jpg")
YardPhoto.create!(yard_id: 2, yard_pic_url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Dolores_Park,_San_Francisco_2013-04-13_14-48.jpg")
YardPhoto.create!(yard_id: 3, yard_pic_url: "https://c2.staticflickr.com/6/5110/5618060282_86e8234767_b.jpg")
YardPhoto.create!(yard_id: 4, yard_pic_url: "http://www.wired.com/images_blogs/business/2013/03/130314_apacademy_0015-660x440.jpg")
YardPhoto.create!(yard_id: 5, yard_pic_url: "https://c2.staticflickr.com/6/5110/5618060282_86e8234767_b.jpg")
YardPhoto.create!(yard_id: 6, yard_pic_url: "https://c2.staticflickr.com/6/5110/5618060282_86e8234767_b.jpg")
YardPhoto.create!(yard_id: 7, yard_pic_url: "http://www.newyorker.com/wp-content/uploads/2014/03/470360231-580.jpg")
YardPhoto.create!(yard_id: 8, yard_pic_url: "http://www.newyorker.com/wp-content/uploads/2014/03/470360231-580.jpg")
YardPhoto.create!(yard_id: 9, yard_pic_url: "http://www.newyorker.com/wp-content/uploads/2014/03/470360231-580.jpg")
YardPhoto.create!(yard_id: 10, yard_pic_url: "http://r-ec.bstatic.com/images/hotel/840x460/562/56280743.jpg")
YardPhoto.create!(yard_id: 11, yard_pic_url: "https://images-resrc.staticlp.com/S=W748/O=75/http://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/01/phong-nha-ke-river-boats.jpg")
YardPhoto.create!(yard_id: 12, yard_pic_url: "http://mediad.publicbroadcasting.net/p/nprberlin/files/styles/x_large/public/201406/493550885.jpg")
