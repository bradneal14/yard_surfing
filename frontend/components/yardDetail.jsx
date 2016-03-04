var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');
var NavBar = require('./NavBar');
var History = require('react-router').History;
var Map = require('./map');
var UserStore = require('../stores/currentUser');
var BookingReqBox = require("./bookingReqBox");

var yardDetail = React.createClass({
  mixins: [History],

  _onChange: function(){
    if (this.state.yard){
      console.log("in the yes of the if");
      UserStore.fetchCurrentOwner(this.state.yard.user_id);
      this.setState({yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser(), owner: UserStore.currentOwner() });
    } else {
      console.log("in the no of the if");
      this.setState({yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser(), owner: "tom"});
      ApiUtil.fetchOwnerById(this.state.yard.user_id);
    }
  },
  getInitialState: function(){
    UserStore.fetchCurrentUser();
    return {yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser(), owner: "harrison" };
  },
  componentWillReceiveProps: function(newProps){
    UserStore.clearOwner();
    ApiUtil.fetchSingleYard(newProps.params.yardId);
  },
  componentDidMount: function(){
    ApiUtil.fetchSingleYard(this.props.params.yardId);
    this.yardListener = YardStore.addListener(this._onChange);
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchOwnerById(this.state.yard.user_id);
    // ApiUtil.fetchSingleYard(parseInt(newProps.params.yardId));
  },
  componentWillUnmount: function(){
    this.yardListener.remove();
    this.userListener.remove();
    UserStore.clearOwner();
  },
  navigateHome: function(){
    this.history.push("/");
  },
  sendToOwnerShow: function(event){
    event.preventDefault();
    this.history.push("/users/" + this.state.yard.user_id);
  },
  render: function(){
    if (!this.state.user && !this.state.yard){
      return (<div>loading....</div>);
    }
    if (this.state.yard.yard_photos.length !== 0){
      var coverPhotoDivStyle = {
        backgroundImage: 'url(' + this.state.yard.yard_photos[0].yard_pic_url + ')'
      };
    }
    if (this.state.owner.main_pic_url){
      var userPhotoDivStyle = {
        backgroundImage: 'url(' + this.state.owner.main_pic_url + ')'
      };
    }
    return(
      <div>
        <div className="wide-jumbo" style={coverPhotoDivStyle}/>
        <div className="pull-right col-sm-5 col-xs-10 col-md-5 col-lg-5">
          <BookingReqBox className="" yard={this.state.yard} user={this.state.user}></BookingReqBox>
        </div>
        <div className="">
          <div className="">
            <div className="yard-detail-owner-image-div" style={userPhotoDivStyle} onClick={this.sendToOwnerShow}/>
            <p>The back of the carter: Yard Detail for {this.state.yard.title}</p>
            <p>Title: {this.state.yard.title}</p>
            <p>Description: {this.state.yard.description}</p>
            <p>Owner's Name: {this.state.owner.fname}</p>
            <p>Lat: {this.state.yard.lat}</p>
            <p>Long: {this.state.yard.lng}</p>
            <button onClick={this.navigateHome} className="btn btn-success  top-buffer left-buffer">Back to all</button>
          </div>
        </div>
        {this.props.children}
        <div id="overlay">
          <h2>Location, Location, Location..</h2>
          <h4>Where will you be staying?</h4>
          <div className="map" id="yard-detail-map">
            <Map id="yard-detail-map"  yard={this.props.params.yardId}></Map>
          </div>
        </div>
        <div className="breaker">
          <p>Hello</p>
        </div>
      </div>
    );
  }
});

module.exports = yardDetail;
