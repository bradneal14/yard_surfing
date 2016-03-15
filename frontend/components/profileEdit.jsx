var React = require('react');
var NavBar = require("./NavBar");
var UserStore = require("../stores/currentUser");
var ApiUtil = require("../util/api_util");
var History = require("react-router").History;
var YardListItem = require('./yardListItem');
var YardStore = require('../stores/yard');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ProfileEdit = React.createClass({
  mixins: [LinkedStateMixin, History],

  _onChange: function(){
    var currentUser = UserStore.currentUser();
    this.fetchAfterDelete();
    this.setState({yards: currentUser.yards, user: currentUser});
  },
  _onDelete: function(){
    this.setState({yards: YardStore.findById(this.state.user.id)});
  },
  fetchAfterDelete: function(){
    var bounds = {northEast: {lat: 84.9 , lng: 180 }, southWest: {lat: -85, lng: -180 }};
    ApiUtil.fetchYards(bounds);
  },
  getInitialState: function(){
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
  updateInfo: function(event){
    event.preventDefault();
    var information = Object.assign({}, this.state);
    ApiUtil.updateUserInfo(information);
    this.history.push("users/" + this.state.user.id);
  },
  state: function(){
    console.log("STATE", this.state);
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
        <br/>
        <br/>
        <br/>
        <div className="profile-show-pic" style={profileImageShowDiv} />
        <div className="col-md-5">
          <form onSubmit={this.updateInfo}>
            <label>First Name</label>
            <input type="text" valueLink={this.linkState('fname')} className="form-control" placeholder={this.state.user.fname}/>
            <br/>
            <label>Last Name</label>
            <input type="text" valueLink={this.linkState('lanme')} className="form-control" placeholder={this.state.user.lname}/>
            <br/>
            <label>Email</label>
            <input type="email" valueLink={this.linkState('title')} className="form-control" placeholder={this.state.user.email}/>
            <br/>
            <label>About me</label>
            <textarea valueLink={this.linkState('description')} className="form-control" placeholder={this.state.user.description}/>
            <br/>
            <label>Birthday</label>
            <input type="date" valueLink={this.linkState('birthday')} className="form-control" placeholder={this.state.user.birthday}/>
            <br/>
            <label>Gender</label>
            <input type="text" valueLink={this.linkState('gender')} className="form-control" placeholder={this.state.user.gender}/>
            <br/>
            <label>Photo URL</label>
            <input type="text" valueLink={this.linkState('main_pic_url')} className="form-control" placeholder={this.state.user.main_pic_url}/>
            <br/>
            <button className="btn blue-btn" type="submit">Update Info</button>
          </form>
        </div>
        <h3 className="user-properties-font pro-edit-drop">Your Properties: </h3>
        <button className="btn btn-success new-yard-btn" onClick={this.newYard}>Add New Yard</button>
        <div className="list-group image-group-contain-div pro-edit-drop">
          <ul><br></br>{this.state.yards.map(function(yard){
            if (yard.yard_photos){
              return <YardListItem className="" yard={yard} key={yard.id} photo={yard.yard_photos[0].yard_pic_url}></YardListItem>;
            }
            })}
          </ul>
        </div>

      </div>
    );
  }
});

window.ProfileEdit = ProfileEdit;
module.exports = ProfileEdit;
