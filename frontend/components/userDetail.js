var React = require('react');
var NavBar = require("./NavBar");

var UserDetail = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar></NavBar>
        <div>This is a users show page Yay!</div>
        <p>Your name is ____</p>
      </div>
    )
  }
});

module.exports = UserDetail;
