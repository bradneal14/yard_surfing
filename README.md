# YardSurfing

[Live Demo](www.yardsurfing.herokuapp.com)

[heroku]: http://www.herokuapp.com

## About


YardSurfing is a web application inspired by CouchSurfing/AirBnb built using Ruby on Rails and React.js.

Similar to AirBnb or CouchSurfing, YardSurfing allows users to post their properties. Users may then search through all of the listings and find somewhere they would be interested in staying. Users can then send a request with specific dates to the owner of a property in which they are interested. Theoretically, YardSurfing would allow for the expansion of camp-able terrain available to those who enjoy spending time outdoors. It also provides a way to explore, vet and reserve said properties. YardSurfing was not built with the intention of becoming popular, commercially or otherwise, but instead was built to be a sample of it's developer's capabilities.

## Features

YardSurfing allows users to:
+ Signin/Signout with password encryption.
+ Search and browse the world for properties.
+ Make requests to stay at a yard for a given time period.
+ Add/remove yards from the database.
+ Edit their profiles, including pictures.
+ View properties on the map.


#### Signin
![Alt text](http://i.imgur.com/5CfVdO6.jpg "Optional title")
[RoomieUp homepage][http://i.imgur.com/5CfVdO6.jpg]


<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Backend / Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication / Facebook login
- [ ] user signup/signin pages
- [ ] blank landing page after signin
- [ ] Phase objective: landing page = list of other users

### Phase 2: Profile: Model, API, and basic APIUtil (1.5 days)

**Objective:** Each User has a profile.

- [ ] create `Profile` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API form for Profile (`ProfilesController`)
- [ ] jBuilder views for Profile info
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] Phase Objective: Can click on User in list and view Profile JSON


### Phase 3: Profile frontend (1 days)

**Objective:** Can click User in list and view profile (not JSON)

- [ ] CSS and other things to make profile not JSON
- [ ] Style forms to CRUD profile
- [ ] Display profile for user
- [ ] Add nav bar at top of page
- [ ] Users should be allowed to add references
- [ ] References should be displayed on profile *bonus*


### Phase 4: Yard (1 day)

**Objective:** All Users have Yards - Yards can be null for non-Hosts

- [ ] create a `Yard` model
- [ ] setup Webpack & Flux scaffold
- [ ] Yards index displays on map (seed data)
- [ ] Implement Google Maps Api to show locations
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 5: Calendar (.5 days)

**Objective:** Each User has a calendar.

- [ ] Users can CRUD events to calendar
- [ ] Forms and UI for calendar

### Phase 6: Stays/Search (1.5 days)

**Objective:** Users can search for Stays and request booking

- [ ] Users can search for Stay based on location, dates, and criteria
- [ ] Users can see if stay is available for dates
- [ ] Users can request stay
- [ ] Hosts can approve/deny requests
- [ ] Approved requests are saved to calendar

### Phase 7: Messaging (1 day)

**Objective:** Users have in/out box. Can send/receive.

- [ ] Users have in/out box
- [ ] users can send/receive messages
- [ ] Users can delete/search messages *bonus*
- [ ] All message stuff should be non-JSON


### Phase 8: MISC (1 day)

**Objective:** Users can have friends, references, photos

- [ ] Update profile to reflect friends, references, photos
- [ ] Suggest FB friends on YardSurfing
- [ ] Update Yard info to include photos (Gallery + add)

### Phase 9: Styling cleanup (1.5 days)

**objective:** Make the site look good.

- [ ] Site should look good
- [ ] Friends should display photo
- [ ] Much CSS and Styling
- [ ] Messages should have notifications
- [ ] Stay requests should have notifications
- [ ] Searches should narrow items in real time
- [ ] % Completion of profile


### Phase 10: Extras (1 day)

**objective:** Implement extra features.

- [ ] Messages search
- [ ] Verification badge
- [ ] YardSurfing Events
- [ ] YardSurfing Groups
- [ ] Infinite Scroll
- [ ] Set reminders on Stay
- [ ] Block users


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
