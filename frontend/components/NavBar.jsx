var React = require('react');
var History = require('react-router').History;
var UserStore = require('../stores/currentUser');
var ApiUtil = require('../util/api_util');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var Modal = require('react-bootstrap').Modal;
var Glyphicon = require("react-bootstrap").Glyphicon;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var NavBar = React.createClass({
  mixins: [History, LinkedStateMixin],
  _onChange: function(){
    this.setState({user: UserStore.currentUser() });
  },
  getInitialState: function(){
    console.log("initial state");
    var succ = localStorage.getItem("success") || false;
    return {user: UserStore.currentUser(), hover: false , showModal: false, success: succ};
  },
  componentDidMount: function(){
    this.userListener = UserStore.addListener(this._onChange);
    console.log("component mounted");
    ApiUtil.fetchCurrentUser();
    // this.yardListener = YardStore.addListener(this._onChange);
    // ApiUtil.fetchYards();
  },
  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchCurrentUser();
    this.setState({success: true});
  },
  componentWillUnmount: function(){
    this.userListener.remove();
    ApiUtil.fetchCurrentUser();
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
  navigateToSearch: function(){
    this.history.push("/search");
  },
  logoutUser: function(){
    localStorage.removeItem("success");
    ApiUtil.logoutUser();
  },
  loginUser: function(event){
    event.preventDefault();
    var credentials = Object.assign({}, this.state);
    ApiUtil.loginUser(credentials, this.setSuccess);
    // console.log();
  },
  show: function(){
    console.log(localStorage);
  },
  setSuccess: function(){
    console.log("success set");
    localStorage.setItem("success", true);
    this.setState({success: true});
  },
  mouseOver: function () {
    this.setState({hover: true});
  },
  mouseOut: function () {
    this.setState({hover: false});
  },
  showInfo: function(){
    console.log("LOCAL STORAGE", localStorage);
    console.log("STATE", this.state);
  },
  render: function(){
    var cursorPointer = {
      cursor: 'pointer',
    };
    if (this.state.hover){
      var homeButton = <a className="pull-left" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.navigateHome} style={cursorPointer}><img src="logo_with_text_good.png" className="small-icon"/></a>;
    } else {
      var homeButton = <a className="pull-left" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.navigateHome} style={cursorPointer}><img src="white_logo_w_text.png" className="small-icon"/></a>;
    }
    var loggedInNav = <nav className="navbar-default navbar-fixed-top">
      <div className="col-xs-12">

        <div className="navbar-left">
          {homeButton}
        </div>
        <div className="navbar-right" id="collapsemenu">
          <ul className="nav navbar-nav">
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
          <span className="glyphicon glyphicon-print"/>
          <ul className="nav navbar-nav">
            <li><a style={cursorPointer} onClick={this.open}>Login</a></li>
              <Modal show={this.state.showModal} onHide={this.close} bsSize="small">
           <Modal.Header closeButton>
             <Modal.Title className="signin-modal-title-font"><img src="blue-tent-icon-red.png" className="small-icon-modal"/>Sign In</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <form className="form-group" id="signinForm" onSubmit={this.loginUser}>
               <label className="form-inline signin-modal-ele-font">Email: </label>
               <input className="form-control" valueLink={this.linkState('email')}/>
               <br/>
               <label className="form-inline signin-modal-ele-font">Password: </label>
               <input className="form-control" type="password" valueLink={this.linkState('password')}/>
               <br/>
               <button className="btn red-btn text-center" type="submit">Sign In</button>
               <button className="btn blue-btn left-buffer text-center" onClick={this.show}>Sign In As Guest</button>
             </form>
           </Modal.Body>
           <Modal.Footer>
           </Modal.Footer>
         </Modal>
          </ul>
        </div>
      </div>
    </nav>;

    var experiment = <nav className="navbar-default navbar-fixed-top">
      <div className="col-xs-12 navbar-adjust">

        <div className="navbar-left">
          {homeButton}
        </div>
        <div className="navbar-right nav navbar dropdown icon-format">
          <DropdownButton  className="glyph-format" noCaret title={<img className="burger-adjust" src="https://cdn3.iconfinder.com/data/icons/iconano-web-stuff/512/001-Menu-512.png"/>}>
            <MenuItem style={cursorPointer} onClick={this.navigateHome}>Home</MenuItem>
            <MenuItem style={cursorPointer} onClick={this.navigateHome}>About</MenuItem>
            <MenuItem style={cursorPointer} onClick={this.navigateToProfileShow}>My Profile</MenuItem>
            <MenuItem style={cursorPointer} onClick={this.navigateToSearch}>View Listings</MenuItem>
            <MenuItem style={cursorPointer} onClick={this.logoutUser}>Logout</MenuItem>
          </DropdownButton>
        </div>
      </div>
    </nav>;

    return (experiment);
  }
});

module.exports = NavBar;
