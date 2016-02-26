var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var YardConstants = require('../constants/yard_constants');

var _yards = [];
var YardStore = new Store(AppDispatcher);

YardStore.all = function() {
  return _yards.slice(0);
};

YardStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case YardConstants.YARDS_RECEIVED:
      resetYards(payload.yards);
      YardStore.__emitChange();
      break;
    case YardConstants.NEW_YARD:
      addYard(payload.yard);
      YardStore.__emitChange();
      break;
  }
};

var addYard = function(yard){
  _yards.push(yard);
};

var resetYards = function(yards){
  _yards = yards;
};

window.YardStore = YardStore;
module.exports = YardStore;
