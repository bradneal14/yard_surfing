var React = require('react');
var History = require('react-router').History;
var UserStore = require('../stores/currentUser');
var ApiUtil = require('../util/api_util');

var NavBar = React.createClass({
  mixins: [History],
  _onChange: function(){
    this.setState({user: UserStore.currentUser() });
  },
  getInitialState: function(){
    return {user: UserStore.currentUser(), hover: false };
  },
  componentDidMount: function(){
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
    // this.yardListener = YardStore.addListener(this._onChange);
    // ApiUtil.fetchYards();
  },
  componentWillUnmount: function(){
    this.userListener.remove();
  },
  navigateHome: function(){
    this.history.push("/");
  },
  navigateToProfileShow: function(){
    this.history.push("users/" + this.state.user.id);
  },
  logoutUser: function(){
    ApiUtil.logoutUser();
  },
  mouseOver: function () {
    this.setState({hover: true});
  },
  mouseOut: function () {
    this.setState({hover: false});
  },
  render: function(){
    var cursorPointer = {
      cursor: 'pointer',
    };
    if (this.state.hover){
      var homeButton = <a className="pull-left" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.navigateHome} style={cursorPointer}><img src="blue-tent-icon.png" className="small-icon"/></a>;
    } else {
      var homeButton = <a className="pull-left" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.navigateHome} style={cursorPointer}><img src="white-tent-icon.png" className="small-icon"/></a>;
    }
    return (
      <nav className="navbar-default navbar-fixed-top">
        <div className="col-xs-12">

          <div className="navbar-left">
            {homeButton}
          </div>
          <div className="navbar-right">
            <ul className="nav navbar-nav">
              <li><a style={cursorPointer} onClick={this.navigateToProfileShow}>My Profile </a></li>
              <li><a style={cursorPointer} onClick={this.logoutUser}>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
