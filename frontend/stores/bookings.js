var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BookingConstants = require('../constants/booking_constants')

var _bookings = {};

var BookingStore = new Store(AppDispatcher);

BookingStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case BookingConstants.ADD_BOOKING:
      BookingStore.receiveNewBooking(payload.booking);
      BookingStore.__emitChange();
      break;
  }
}

BookingStore.receiveNewBooking = function(booking){
  _bookings[booking.id] = booking;
}

module.exports = BookingStore;
