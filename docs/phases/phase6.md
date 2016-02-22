# Phase 5: Calendar

## Rails
### Models
* Stay

### Controllers
* Api::StayController (create, destroy, index, show, update)

### Views
* stays/index.json.jbuilder

## Flux
### Views (React Components)
* StaysIndex
  - StayIndexItem
* StayShow
* StayRequestForm

### Stores
* Stay

### Actions
* ApiActions.receiveAllStays -> triggered by ApiUtil
* ApiActions.receiveSingleStay
* ApiActions.deleteStay
* StayActions.fetchAllStays -> triggers ApiUtil
* StayActions.fetchSingleStay
* StayActions.createStay
* StayActions.updateStay
* StayActions.destroyStay

### ApiUtil
* ApiUtil.fetchAllStays
* ApiUtil.fetchSingleStay
* ApiUtil.createStay
* ApiUtil.updateStay
* ApiUtil.destroyStay

## Gems/Libraries
