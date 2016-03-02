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
    return (
      <nav className="navbar-default navbar-fixed-top red-bg-fill">
        <div className="container row">

          <div className="nav-header navbar-justified">
            <a className="navbar-brand" onClick={this.navigateHome}>
              YS
            </a>
          </div>

          <ul className="nav navbar-nav">
            <li><a>Search</a></li>
            <li><a>My Properties</a></li>
            <li><a onClick={this.navigateToProfileShow}>My Profile </a></li>
            <li className="nav navbar-nav navbar-right"><a onClick={this.logoutUser}>Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
