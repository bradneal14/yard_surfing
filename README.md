# YardSurfing

[Live Demo](www.yardsurfing.herokuapp.com)

[heroku]: http://www.herokuapp.com

## About


YardSurfing is a web application inspired by CouchSurfing/AirBnb built using Ruby on Rails and React.js.

Similar to AirBnb or CouchSurfing, YardSurfing allows users to post their properties. Users may then search through all of the posted listings and find properties at which they would like to stay. Users can then send a request with specific dates to the owner, who would accept or reject their request. Theoretically, YardSurfing would allow for the expansion of camp-able terrain available to those who enjoy spending time outdoors. It also provides a way to explore, vet and reserve said properties. YardSurfing was not built with the intention of becoming popular, commercially or otherwise, but instead was built to be a sample of it's developer's capabilities.

## Features

YardSurfing allows users to:
+ Signin/Signout with password encryption.
+ Search the world for properties.
+ Make requests to stay at a yard for a given time period.
+ Add/remove yards from the database.
+ Edit their profiles, including pictures.
+ View properties on the map itself.


#### Sign In
![Alt text](http://i.imgur.com/nUDeyg6.png)
The Sign In page uses BCrypt to encrypt and salt passwords before they are saved to the database. It allows existing users to signin and allows new users to signup quickly and easily. It also features a guest login for demonstration purposes.

### Home
![Alt text](http://i.imgur.com/oTbmW5W.jpg)
The Home page is just really a place for people to get welcomed to the site and use the search feature to find potential listings.

### Search
![Alt text](http://i.imgur.com/DmmFjKB.jpg)
The Search index is kind of the central hub of the site. The page allows users to explore properties through links on the left and generates those links in conjunction with the bounds of the map on the right. For example, if you zoom on the map such that only one property's map marker is in view, that listing would also be the only property listed on the left side. The map markers are clickable, expanding to show a thumbnail image, which is also clickable as a link to that property's page.

### Viewing a listing
![Alt Text](http://i.imgur.com/Qy4WhpP.jpg)
Viewing a listing fairly straightforward. You have the property's information listed below the cover image. The photo of the property's owner is clickable, as is the owner's name in the information section below, with both links directing to the host's profile page. On the right you have the booking request box. Users can enter dates and the number of guests in their party. This request is intended for the owner who, in practice, would be able to accept or deny it.


### Viewing a profile
![Alt Text](http://i.imgur.com/DuWaMtl.png)
Users can check out potential hosts by looking at their profile. Friendships can be attempted but are not guaranteed.

### Editing a profile
![Alt Text](http://i.imgur.com/muCULRX.png)
This is the page on which a user may edit his or her profile. The information fields are pre-filled with the existing information the user has given. If a user wishes to edit some but not all fields, they may do so. This is also the place where users may add or delete properties.


## Technology
+ React.js/Flux
+ Ruby/Rails


YardSuring was built using Ruby/Rails for the database (backend) and using React.js/Flux (frontend). YardSurfing makes use of the Google Maps API for it's map aspect, with a few customizations for the thumbnail links and black map markers. The site's styling uses bootstrap for some fundamental sizing and placement with the majority of the CSS being custom. Npm packages include react-router, linked-state and babel to support jsx.
