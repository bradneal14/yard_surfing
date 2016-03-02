var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchYards: function(bounds){
    $.ajax({
      url: 'api/yards',
      type: 'GET',
      data: {bounds},
      success: function(data){
        console.log(data);
        ApiActions.receiveAll(data);
      }
    });
  },
  createYard: function(yard){
    console.log("made it to util")
    $.ajax({
      url: 'api/yards',
      type: 'POST',
      data: {yard: yard},
      success: function(data){
        ApiActions.newYard(data);
      }
    });
  },
  fetchSingleYard: function(id){
    $.ajax({
      url: 'api/yards/' + id,
      type: "GET",
      success: function(data){
        ApiActions.receiveSingleYard(data);
      }
    })
  },
  removeYard: function(id){
    $.ajax({
      url: 'api/yards/' + id,
      type: "DELETE",
      success: function(data){
        ApiActions.removeYard(data);
      }
    })
  },
  fetchCurrentUser: function(){
    $.ajax({
      url: 'api/current_user',
      type: "GET",
      success: function(data){
        ApiActions.currentUser(data);
      }
    })
  },
  logoutUser: function(){
    $.ajax({
      url: "session",
      type: "DELETE",
      success: function(data){
        window.location.href = "/";
      }
    })
  },
  createBooking: function(booking){
    $.ajax({
      url: "api/bookings",
      type: "POST",
      data: {booking: booking},
      success: function(data){
        ApiActions.createBooking(data);
      },
      error: function(data){
        ApiActions.handleErrors(data);
      }
    })
  }




  // createYard: function(data){
  //   $.post('api/yards', { yard: data }, function(yard) {
  //     ApiActions.receiveAll([yard]);
  //   });
  // }
};


module.exports = ApiUtil;
