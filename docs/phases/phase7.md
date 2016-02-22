# Phase 5: Calendar

## Rails
### Models
* Message

### Controllers
* Api::MessageController (create, destroy, index, show, update)

### Views
* messages/index.json.jbuilder
* messages/show.json.jbuilder
* messages/new.html.erb

## Flux
### Views (React Components)
* MessagesIndex
  - MessageIndexItem
* MessageShow
* MessageRequestForm

### Stores
* Message

### Actions
* ApiActions.receiveAllMessages -> triggered by ApiUtil
* ApiActions.receiveSingleMessage
* ApiActions.deleteMessage
* MessageActions.fetchAllMessages -> triggers ApiUtil
* MessageActions.fetchSingleMessage
* MessageActions.createMessage
* MessageActions.updateMessage
* MessageActions.destroyMessage

### ApiUtil
* ApiUtil.fetchAllMessages
* ApiUtil.fetchSingleMessage
* ApiUtil.createMessage
* ApiUtil.updateMessage
* ApiUtil.destroyMessage

## Gems/Libraries
