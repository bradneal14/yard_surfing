var React = require('react');
var NavBar = require("./NavBar");
var UserStore = require("../stores/currentUser");
var ApiUtil = require("../util/api_util");
var History = require("react-router").History;
var YardListItem = require('./YardListItem');

var UserDetail = React.createClass({
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
    console.log(this.state)
  },
  componentWillUnmout: function(){
    UserStore.userListener.remove();
  },
  render: function(){
    if (!this.state.user){
      return <div>Loading..</div>
    }
    return (
      <div>
        <NavBar></NavBar>
        <div>This is a users show page Yay!</div>
        <p> Welcome to your page, {this.state.user.fname}</p>
        <p>Your name is {this.state.user.fname} {this.state.user.lname}</p>
        <ul>Your yards are : {this.state.user.yards.map(function(yard){
            return <YardListItem yard={yard} key={yard.id}></YardListItem>
        })}
        </ul>
      </div>
    )
  }
});

module.exports = UserDetail;
