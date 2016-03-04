var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var ApiUtil = require('../util/api_util');


var _user = []; //current user
var _owner = [];
var _userById = [];

var UserStore = new Store(AppDispatcher);

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.CURRENT_USER:
      UserStore.receiveCurrentUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_OWNER_BY_ID:
    console.log("in user store", payload);
      UserStore.receiveYardOwner(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_USER_BY_ID:
    console.log("we are where we want to be");
      UserStore.receiveUserById(payload.user);
      UserStore.__emitChange();
      break;
  }
};


UserStore.clearOwner = function(){
  _owner = [];
};

UserStore.clearUserById = function(){
  _userById = [];
};

UserStore.receiveYardOwner = function(user){
  _owner = [user];
};

UserStore.receiveUserById = function(user){
  _userById = [user];
};

UserStore.receiveCurrentUser = function(user){
  _user = [user];
};

UserStore.fetchUserById = function(id) {
  if (_userById.length === 0){
    ApiUtil.fetchUserById(id);
  }
};

UserStore.fetchCurrentUser = function(){
  if (_user.length === 0){
    ApiUtil.fetchCurrentUser();
  }
};

UserStore.fetchCurrentOwner = function(id){
  if (_owner.length === 0){
      ApiUtil.fetchOwnerById(id);
  }
};

UserStore.currentOwner = function(){
  return _owner[0];
};

UserStore.currentUser = function(){
  return _user[0];
};

UserStore.userById = function(){
  return _userById[0];
};

module.exports = UserStore;
