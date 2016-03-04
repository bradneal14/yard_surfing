var React = require('react');
var NavBar = require("./NavBar");
var UserStore = require("../stores/currentUser");
var ApiUtil = require("../util/api_util");
var History = require("react-router").History;


var UserDetail = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return(
      {user: UserStore.userById(), currentUser: UserStore.currentUser(), friends: false}
    );
  },

  doIt: function(){
    console.log("STATE", this.state);
    ApiUtil.fetchUserById(this.props.params.userId);
    ApiUtil.fetchCurrentUser();
  },
  _onChange: function(){
    this.setState({user: UserStore.userById(), currentUser: UserStore.currentUser() });
  },
  componentWillMount: function(){
    ApiUtil.fetchUserById(this.props.params.userId);
    ApiUtil.fetchCurrentUser();
  },
  componentDidMount: function(){
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUserById(this.props.params.userId);
  },
  componentWillUnmount: function(){
    console.log("user show unmounting");
    this.userListener.remove();
  },
  componentWillReceiveProps: function(newProps){
    UserStore.clearUserById();
    ApiUtil.fetchUserById(this.props.params.userId);
  },
  handleAddFriend: function(){
    var button = <button className="btn btn-warning">Friend Requested</button>;
  },
  handleEdit: function(){
    this.history.push("/edit_profile");
  },
  buttonToggle: function(){
    this.setState({friends: true});
  },
  render: function(){
    if (!this.state.user){
      return (
        <div>Loading..</div>
      );
    }
    var profileImageShowDiv = {
      backgroundImage: 'url(' + this.state.user.main_pic_url + ')'
    };
    if (this.state.user.id === this.state.currentUser.id){
      var editButton = <button onClick={this.handleEdit} className="btn btn-success">Edit Profile</button>;
    }
    if (this.state.user.id !== this.state.currentUser.id ){
      if (this.state.friends === false){
        var friendButton = <button className="btn btn-danger" onClick={this.buttonToggle}>Add Friend</button>;
      } else {
        var friendButton = <button className="btn btn-success">Request Pending</button>;
      }
    }
    return (
      <div>
        <div>This is a users show page Yay!</div>
        <p> Welcome to the page of {this.state.user.fname} {this.state.user.lname}</p>
        <div className="profile-show-pic" style={profileImageShowDiv} />
        <button onClick={this.doIt} className="btn btn-danger">Click me to see state</button>
        {editButton}
        {friendButton}
      </div>
    );
  }
});


module.exports = UserDetail;
