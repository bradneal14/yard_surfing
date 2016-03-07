var React = require('react');
var History = require('react-router').History;
var UserStore = require('../stores/currentUser');
var ApiUtil = require('../util/api_util');
var Modal = require('react-bootstrap').Modal;

var NavBar = React.createClass({
  mixins: [History],
  _onChange: function(){
    this.setState({user: UserStore.currentUser() });
  },
  getInitialState: function(){
    return {user: UserStore.currentUser(), hover: false , showModal: false};
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
  close: function() {
   this.setState({ showModal: false });
  },
  open: function() {
   this.setState({ showModal: true });
  },
  navigateToProfileShow: function(){
    this.history.push("users/" + this.state.user.id);
  },
  logoutUser: function(){
    ApiUtil.logoutUser();
  },
  loginUser: function(data){
    // ApiUtil.loginUser();
    console.log(data);
  },
  mouseOver: function () {
    this.setState({hover: true});
  },
  mouseOut: function () {
    this.setState({hover: false});
  },
  showInfo: function(){
    console.log(UserStore.currentUser());
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
    var loggedInNav = <nav className="navbar-default navbar-fixed-top">
      <div className="col-xs-12">

        <div className="navbar-left">
          {homeButton}
        </div>
        <div className="navbar-right">
          <ul className="nav navbar-nav">
            <li><a style={cursorPointer} onClick={this.showInfo}>Info</a></li>
            <li><a style={cursorPointer} onClick={this.navigateToProfileShow}>My Profile </a></li>
            <li><a style={cursorPointer} onClick={this.logoutUser}>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>;

    var loggedOutNav = <nav className="navbar-default navbar-fixed-top">
      <div className="col-xs-12">

        <div className="navbar-left">
          {homeButton}
        </div>
        <div className="navbar-right">
          <ul className="nav navbar-nav">
            <li><a style={cursorPointer} onClick={this.open}>Login</a></li>
              <Modal show={this.state.showModal} onHide={this.close} bsSize="small">
           <Modal.Header closeButton>
             <Modal.Title className="signin-modal-title-font"><img src="blue-tent-icon-red.png" className="small-icon-modal"/>Sign In</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <form className="form-group" id="signinForm">
               <label className="form-inline signin-modal-ele-font">Email: </label>
               <input className="form-control"/>
               <br/>
               <label className="form-inline signin-modal-ele-font">Password: </label>
               <input className="form-control"/>
             </form>
           </Modal.Body>
           <Modal.Footer>
              <div className="text-center">
                <button className="btn red-btn" type="submit" onClick={this.close}>Sign In</button>
                <button className="btn blue-btn" type="submit" onClick={this.close}>Sign In As Guest</button>
              </div>
           </Modal.Footer>
         </Modal>
          </ul>
        </div>
      </div>
    </nav>;

    if (UserStore.currentUser()){
      var NavigationBar = loggedInNav;
    } else {
      var NavigationBar = loggedOutNav;
    }
    return (NavigationBar);
  }
});

module.exports = NavBar;
