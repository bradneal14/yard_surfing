var React = require('react');
var History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],
  navigateHome: function(){
    this.history.push("/")
  },
  navigateToProfileShow: function(){
    console.log(this.state)
    this.history.push("users/" + 3)
  },
  render: function(){
    return (
      <nav className="navbar-default navbar-fixed-top red-bg-fill">
        <div className="container-fluid row">

          <div className="nav-header">
            <a className="navbar-brand" onClick={this.navigateHome}>
              YS
            </a>
          </div>

          <ul className="nav navbar-nav">
            <li><a>Search</a></li>
            <li><a>My Properties</a></li>
            <li><a onClick={this.navigateToProfileShow}>My Profile </a></li>
            <li className="navbar-right"><a>Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = NavBar;
