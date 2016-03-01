var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');


var _user = [];

var UserStore = new Store(AppDispatcher);

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.CURRENT_USER:
      UserStore.receiveCurrentUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

UserStore.receiveCurrentUser = function(user){
  _user = [user];
}

UserStore.fetchCurrentUser = function(){
  if (_user.length === 0){
    ApiUtil.fetchCurrentUser();
  }
},

UserStore.currentUser = function(){
  return _user[0];
}

module.exports = UserStore;
