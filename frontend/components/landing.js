var React = require('react');
var NavBar = require('./NavBar');

var Landing = React.createClass({

  render: function(){
    return (
      <NavBar></NavBar>
    );
  }
});

window.Landing = Landing;
module.exports = Landing;
