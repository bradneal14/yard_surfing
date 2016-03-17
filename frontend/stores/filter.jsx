var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');
var ApiUtil = require('../util/api_util');


var _fire = [false]; //current user
var _water = [false];
var _shower = [false];
var _toilet = [false];

var FilterStore = new Store(AppDispatcher);

FilterStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case FilterConstants.FILTER_ACTIVE:
      this.getFire();
      this.__emitChange();
      break;
  }
};

FilterStore.getFire = function(){
  if (_fire[0] === false) {
    _fire = [true];
  } else {
    _fire = [false];
  }
};
FilterStore.getWater = function(bool){
  _water = [bool];
};
FilterStore.getShower = function(bool){
  _shower = [bool];
};
FilterStore.getToilet = function(bool){
  _toilet = [bool];
};

FilterStore.getInfo = function(){
  return {fire_status: _fire[0], water_status: false, shower_status: false, toilet_status: false};
};


module.exports = FilterStore;
