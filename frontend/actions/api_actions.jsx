var AppDispatcher = require('../dispatcher/dispatcher');
var YardConstants = require('../constants/yard_constants');
var UserConstants = require("../constants/user_constants");
var BookingConstants = require('../constants/booking_constants');

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
    var payload = {actionType: BookingConstants.ADD_BOOKING, booking: data};
    AppDispatcher.dispatch(payload);
  },
  handleErrors: function(data){
    var payload = {actionType: BookingConstants.RENDER_ERROR, errors: data};
    AppDispatcher.dispatch(payload);
  },
  receiveOwnerById: function(data){
    var payload = {actionType: UserConstants.RECEIVE_OWNER_BY_ID, user: data};
    AppDispatcher.dispatch(payload);
  },
  receiveUserById: function(data){
    var payload = {actionType: UserConstants.RECEIVE_USER_BY_ID, user: data};
    AppDispatcher.dispatch(payload);
  },
  receiveEditedUser: function(data){
    var payload = {actionType: UserConstants.RECEIVE_EDITED_USER, user: data};
    AppDispatcher.dispatch(payload);
  }
};

module.exports = ApiActions;
