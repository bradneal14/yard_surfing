var React = require('react');
var NavBar = require("./NavBar");
var UserStore = require("../stores/currentUser");
var ApiUtil = require("../util/api_util");
var History = require("react-router").History;
var YardListItem = require('./YardListItem');
var YardStore = require('../stores/yard');

var UserDetail = React.createClass({
  mixins: [History],

  _onChange: function(){
    var currentUser = UserStore.currentUser();
    this.fetchAfterDelete();
    console.log("one");
    console.log("on change userdetail", currentUser);
    this.setState({yards: currentUser.yards, user: currentUser});
  },
  _onDelete: function(){
    console.log("user detail on delete");
    this.setState({yards: YardStore.findById(this.state.user.id)});
  },
  fetchAfterDelete: function(){
    var bounds = {northEast: {lat: 84.9 , lng: 180 }, southWest: {lat: -85, lng: -180 }};
    ApiUtil.fetchYards(bounds);
  },
  getInitialState: function(){
    console.log("initial state userdetail");
    UserStore.fetchCurrentUser();
    return {user: {}, yards: [] };
  },
  componentDidMount: function(){
    this.userListener = UserStore.addListener(this._onChange );
    // ApiUtil.fetchCurrentUser();
    this.yardListener = YardStore.addListener(this._onDelete );
    // ApiUtil.fetchYards();
  },
  // componentWillReceiveProps: function(newProps){
  //   ApiUtil.fetchCurrentUser();
  // },
  componentWillUnmount: function(){
    this.userListener.remove();
    this.yardListener.remove();
  },
  render: function(){
    return (
      <div>
        <NavBar></NavBar>
        <div>This is a users show page Yay!</div>
        <p> Welcome to your page, {this.state.user.fname}</p>
        <p>Your name is {this.state.user.fname} {this.state.user.lname}</p>

        <ul>Your yards are : <br></br>{this.state.yards.map(function(yard){
          return <YardListItem yard={yard} key={yard.id}></YardListItem>;
          })}
          </ul>

      </div>
    );
  }
});


module.exports = UserDetail;
