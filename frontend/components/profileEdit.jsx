var React = require('react');
var NavBar = require("./NavBar");
var UserStore = require("../stores/currentUser");
var ApiUtil = require("../util/api_util");
var History = require("react-router").History;
var YardListItem = require('./yardListItem');
var YardStore = require('../stores/yard');

var ProfileEdit = React.createClass({
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
    ApiUtil.fetchCurrentUser();
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
  newYard: function(){
    this.history.push("/yards/new");
  },
  render: function(){
    var profileImageShowDiv = {
      backgroundImage: 'url(' + this.state.user.main_pic_url + ')'
    };
    return (
      <div>
        <div>This is a users show page Yay!</div>
        <p> Welcome to your page, {this.state.user.fname}</p>
        <p>Your name is {this.state.user.fname} {this.state.user.lname}</p>
        <div className="profile-show-pic" style={profileImageShowDiv} />
        <h3 className="user-properties-font">Your Properties: </h3>
        <button className="btn btn-success new-yard-btn" onClick={this.newYard}>Add New Yard</button>
        <div className="list-group image-group-contain-div">
          <ul><br></br>{this.state.yards.map(function(yard){
            return <YardListItem className="" yard={yard} key={yard.id} photo={yard.yard_photos[0].yard_pic_url}></YardListItem>;
            })}
          </ul>
        </div>

      </div>
    );
  }
});


module.exports = ProfileEdit;
