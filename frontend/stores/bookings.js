var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BookingConstants = require('../constants/booking_constants')

var _bookings = {};
var _errors = [];

var BookingStore = new Store(AppDispatcher);

BookingStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case BookingConstants.ADD_BOOKING:
      BookingStore.receiveNewBooking(payload.booking);
      BookingStore.__emitChange();
      console.log("made it through the store");
      break;
    case BookingConstants.RENDER_ERROR:
      console.log(payload.errors)
      BookingStore.receiveErrors(payload.errors);
      BookingStore.__emitChange();
      break;
  }
};

BookingStore.receiveErrors= function(errors){
  _errors = [];
  _errors = errors.responseJSON.errors;
};

BookingStore.allErrors = function(){
  return _errors.slice();
};

BookingStore.receiveNewBooking = function(booking){
  _errors = [];
  _bookings[booking.id] = booking;
};

module.exports = BookingStore;
