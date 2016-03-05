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
    return {user: UserStore.currentUser() };
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
  render: function(){
    var cursorPointer = {
      cursor: 'pointer',
    };
    return (
      <nav className="navbar-default navbar-fixed-top">
        <div className="col-xs-12">

          <div className="navbar-left">
            <a className="pull-left" onClick={this.navigateHome} style={cursorPointer}><img src="/assets/white-tent-icon.png" className="small-icon"/></a>
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
