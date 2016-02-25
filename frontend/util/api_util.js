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
  }
};


module.exports = ApiUtil;
