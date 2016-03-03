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
    this.setState({yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser() });
  },
  getInitialState: function(){
    UserStore.fetchCurrentUser();
    return {yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser() };
  },
  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchSingleYard(newProps.params.yardId);
  },
  componentDidMount: function(){
    this.yardListener = YardStore.addListener(this._onChange);
    ApiUtil.fetchSingleYard(this.props.params.yardId);
    // this.userListener = UserStore.addListener(this._onChange);
    // ApiUtil.fetchSingleYard(parseInt(newProps.params.yardId));
  },
  componentWillUnmount: function(){
    this.yardListener.remove();
    // UserStore.userListener.remove();
  },
  navigateHome: function(){
    this.history.push("/");
  },
  render: function(){
    if (!this.state.user && !this.state.yard){
      return (<div>loading....</div>);
    }
    var photoDivStyle = {
      backgroundImage: 'url(' + this.state.yard.yard_photos[0].yard_pic_url + ')'
    };
    return(
      <div>
        <NavBar className="col-sm-12"></NavBar>
        <div className="wide-jumbo" style={photoDivStyle}/>
        <div className="pull-right col-sm-5 col-xs-10 col-md-5 col-lg-5">
          <BookingReqBox className="" yard={this.state.yard} user={this.state.user}></BookingReqBox>
          <div className="">
            <br/>
            <Map id="map-formatting-yard-show" yard={this.props.params.yardId} ></Map>
          </div>
        </div>
        <div className="">
          <div className="">
            <p>The back of the carter: Yard Detail forr {this.state.yard.title}</p>
            <p>Title: {this.state.yard.title}</p>
            <p>Description: {this.state.yard.description}</p>
            <p>Owner's Name: {this.state.yard.user_id}</p>
            <p>Lat: {this.state.yard.lat}</p>
            <p>Long: {this.state.yard.lng}</p>
            <button onClick={this.navigateHome} className="btn btn-success  top-buffer left-buffer">Back to all</button>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = yardDetail;
