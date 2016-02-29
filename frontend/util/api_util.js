var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchYards: function(bounds){
    $.ajax({
      url: 'api/yards',
      type: 'GET',
      data: {bounds},
      success: function(data){
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
  }




  // createYard: function(data){
  //   $.post('api/yards', { yard: data }, function(yard) {
  //     ApiActions.receiveAll([yard]);
  //   });
  // }
};


module.exports = ApiUtil;
