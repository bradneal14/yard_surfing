var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');


var _user = [];

var UserStore = new Store(AppDispatcher);

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.CURRENT_USER:
      console.log("if you see this you are close")
      console.log(payload.user)
      UserStore.receiveCurrentUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

UserStore.receiveCurrentUser = function(user){
  _user = [];
  _user.push(user);
}

UserStore.currentUser = function(){
  return _user[0];
}

module.exports = UserStore;
