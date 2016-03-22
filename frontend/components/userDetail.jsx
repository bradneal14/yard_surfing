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
      var editButton = <button onClick={this.handleEdit} className="btn blue-btn big-left-buffer">Edit Profile</button>;
    }
    if (this.state.user.id !== this.state.currentUser.id ){
      if (this.state.friends === false){
        var friendButton = <button className="btn btn-danger big-left-buffer" onClick={this.buttonToggle}>Add Friend</button>;
      } else {
        var friendButton = <button className="btn btn-success big-left-buffer">Request Pending</button>;
      }
    }
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div className="profile-show-pic" style={profileImageShowDiv}/>
          <div className="profile-show-strip">
            <div className="pro-details-form">
              <h3 className="big-left-buffer">{this.state.user.fname} {this.state.user.lname}</h3>
              {editButton}
              {friendButton}
            </div>
          </div>
          <div className="yard-detail-info-outer">
            <div className="yard-detail-info-inner">
              <h3 className="about-user-font">About this User</h3>
              <div className="inner-inner-detail">
                <div>
                  <h3 className="prop-attr-font">About {this.state.user.fname}:</h3>
                  <p className="prop-info-detail">{this.state.user.description}</p>
                </div>
                <div>
                  <h3 className="prop-attr-font">Birthday: </h3>
                  <p className="prop-info-detail">{this.state.user.birthday}</p>
                </div>
                <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = UserDetail;
