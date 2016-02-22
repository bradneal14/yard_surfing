# Phase 3: Profile Frontend (2 days)

## Rails
### Models

### Controllers

### Views
* users/edit.html.erb

## Flux
### Views (React Components)
* UsersIndex
  - UserIndexItem

### Stores
* Profile

### Actions
* ApiActions.receiveAllProfiles -> triggered by ApiUtil
* ApiActions.receiveSingleProfile
* ProfileActions.fetchAllProfiles -> triggers ApiUtil
* ProfileActions.fetchSingleProfile
* ProfileActions.editProfile

### ApiUtil
* ApiUtil.fetchAllProfiles
* ApiUtil.fetchSingleProfile
* ApiUtil.editProfile

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
