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




  // createYard: function(data){
  //   $.post('api/yards', { yard: data }, function(yard) {
  //     ApiActions.receiveAll([yard]);
  //   });
  // }
};


module.exports = ApiUtil;
