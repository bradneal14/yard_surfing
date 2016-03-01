var AppDispatcher = require('../dispatcher/dispatcher');
var YardConstants = require('../constants/yard_constants');
var UserConstants = require("../constants/user_constants");

var ApiActions = {
  receiveAll: function(data){
    var payload = {actionType: YardConstants.YARDS_RECEIVED, yards: data};
    AppDispatcher.dispatch(payload);
  },
  newYard: function(data){
    var payload = {actionType: YardConstants.NEW_YARD, yard: data};
    AppDispatcher.dispatch(payload);
  },
  receiveSingleYard: function(data){
    var payload = {actionType: YardConstants.SINGLE_YARD_RECEIVED, yard: data};
    AppDispatcher.dispatch(payload);
  },
  removeYard: function(data){
    var payload = {actionType: YardConstants.REMOVE_YARD, yard: data};
    AppDispatcher.dispatch(payload);
  },
  currentUser: function(data){
    var payload = {actionType: UserConstants.CURRENT_USER, user: data};
    AppDispatcher.dispatch(payload);
  },
  createBooking: function(data){
    var payload = {actionType: BookingConstants.NEW_BOOKING, booking: data}
    AppDispatcher.dispatch(payload);
  }
};

module.exports = ApiActions;
