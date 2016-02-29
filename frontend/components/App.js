var React = require("react");
var NavBar = require("./NavBar");
var Landing = require('./landing');



var App = React.createClass({
  render: function(){
    return (
        <div>
          <Landing/>
            {this.props.children}
        </div>
    )
  }
});

module.exports = App;
