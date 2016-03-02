var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var YardConstants = require('../constants/yard_constants');

var _yards = {};
var YardStore = new Store(AppDispatcher);

YardStore.all = function() {
  var all_yards = [];
  for (var key in _yards){
    all_yards.push(_yards[key]);
  }
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
    case YardConstants.REMOVE_YARD:
      YardStore.removeYard(payload.yard);
      YardStore.__emitChange();
      break;
  }
};

YardStore.findById = function(userId) {
  // console.log("yards", _yards)
  var matchedYards = [];
  Object.keys(_yards).forEach(function(key){
    if (_yards[key].user_id === userId){
      matchedYards.push(_yards[key]);
    }
  });
  // console.log("matched yards:", userId,  matchedYards);
  return matchedYards;
};

YardStore.resetYard = function(yard){
  _yards[yard.id] = yard;
};

YardStore.removeYard = function(yard){
  // console.log("in store, deleting", yard, yard.id)
  delete _yards[yard.id];
};

YardStore.find = function(id){
  return _yards[id];
};

YardStore.addYard = function(yard){
  _yards[yard.id] = yard;
};

YardStore.resetYards = function(yards){
  _yards = {};
  yards.forEach(function(yard){
    _yards[yard.id] = yard;
  });
};

window.YardStore = YardStore;
module.exports = YardStore;
