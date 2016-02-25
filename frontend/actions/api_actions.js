var AppDispatcher = require('../dispatcher/dispatcher');
var YardConstants = require('../constants/yard_constants');

var ApiActions = {
  receiveAll: function(data){
    var payload = {actionType: YardConstants.YARDS_RECEIVED, yards: data};
    AppDispatcher.dispatch(payload);
  }
};

module.exports = ApiActions;