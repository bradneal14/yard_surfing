var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var YardConstants = require('../constants/yard_constants');

var _yards = {};
var YardStore = new Store(AppDispatcher);

YardStore.all = function() {
   var all_yards = [];
  for (var key in _yards){
    all_yards.push(_yards[key]);
  };
  return all_yards;
};

YardStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case YardConstants.YARDS_RECEIVED:
      YardStore.resetYards(payload.yards);
      YardStore.__emitChange();
      break;
    case YardConstants.NEW_YARD:
      YardStore.addYard(payload.yard);
      YardStore.__emitChange();
      break;
    case YardConstants.SINGLE_YARD_RECEIVED:
      YardStore.resetYard(payload.yard);
      YardStore.__emitChange();
      break;
  }
};

YardStore.resetYard = function(yard){
  _yards[yard.id] = yard;
};

YardStore.find = function(id){
  return _yards[id];
};

YardStore.addYard = function(yard){
  _yards[yard.id] = yard;
};

YardStore.resetYards = function(yards){
  yards.forEach(function(yard){
    _yards[yard.id] = yard;
  });
};

window.YardStore = YardStore;
module.exports = YardStore;
