var React = require('react');
var NavBar = require('./NavBar');
var History = require('react-router').History;

var Landing = React.createClass({
  mixins: [History],
  navigateToSearch: function(){
    this.history.push("/search");
  },
  render: function(){
    return(
      <div>
        <img src="http://cdn.usefulstuff.io/2015/10/Landing-A-Plane.jpg"></img>
        <button className="btn btn-success" onClick={this.navigateToSearch}>Head to search</button>
      </div>
    );
  }
});

window.Landing = Landing;
module.exports = Landing;
