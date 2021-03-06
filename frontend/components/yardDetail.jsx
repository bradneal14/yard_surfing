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
      UserStore.fetchCurrentOwner(this.state.yard.user_id);
      this.setState({yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser(), owner: UserStore.currentOwner(), samples: YardStore.getSamples(this.props.params.yardId) });
    } else {
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
  showState: function(){
    console.log(this.state);
  },
  componentWillUnmount: function(){
    this.yardListener.remove();
    this.userListener.remove();
    UserStore.clearOwner();
  },
  navigateToSearch: function(){
    this.history.push("/search");
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
        backgroundImage: 'url(' + this.state.owner.main_pic_url + ')',
        cursor: 'pointer',
        position: 'relative'
      };
    }
    var amenities = [];
    if (this.state.yard.fire_status){
      amenities.push("fire");
    }
    if (this.state.yard.water_status){
      amenities.push("water");
    }
    if (this.state.yard.shower_status){
      amenities.push("shower");
    }
    if (this.state.yard.toilet_status){
      amenities.push("toilet");
    }
    return(
      <div>
        <div className="wide-jumbo" style={coverPhotoDivStyle}/>
        <div className="pull-right col-sm-5 col-xs-10 col-md-5 col-lg-5">
          <BookingReqBox className="" yard={this.state.yard} user={this.state.user}></BookingReqBox>
        </div>
        <div className="">
          <div className="">
            <div className="yard-detail-owner-image-div" style={userPhotoDivStyle} onClick={this.sendToOwnerShow}>
            </div>
            <div className="yard-detail-title">
              <h2 className="yard-title-font">{this.state.yard.title}</h2>
              <h4 className="yard-location-font">{this.state.yard.location}</h4>
            </div>
            <div className="yard-detail-info-outer">
              <div className="yard-detail-info-inner">
                <h3 className="about-prop-font">About this property</h3>
                <div className="inner-inner-detail">
                  <div>
                    <h3 className="prop-attr-font" >Owner's Name: </h3>
                    <p onClick={this.sendToOwnerShow} className="owners-name prop-info-detail">{this.state.owner.fname} {this.state.owner.lname}</p>
                  </div>
                  <div>
                    <h3 className="prop-attr-font">Description:</h3>
                    <p className="contain-text-user-detail prop-info-detail">{this.state.yard.description}</p>
                  </div>
                  <div>
                    <h3 className="prop-attr-font">Getting there: </h3>
                    <p className="contain-text-user-detail prop-info-detail">{this.state.yard.transport_info}</p>
                  </div>
                  <div>

                </div>
              </div>
            </div>
            <button onClick={this.navigateToSearch} className="back-to-search my-button-signin red-btn top-buffer left-buffer">Back to Search Results</button>
          </div>
        </div>
        {this.props.children}
        <div id="overlay2">
          <h2 className="prop-attr-font">Where will you be staying?</h2>
          <div className="map" id="yard-detail-map">
            <Map id="yard-detail-map"  yard={this.props.params.yardId}></Map>
          </div>
        </div>
        <div className="yard-show-footer">
          <div className="blocker-top">
          </div>
          <div className="text-center">
            <p className="prop-attr-font">Site by Brad Neal</p>
            <h4><a href="https://www.github.com/bradneal14">Hire me</a></h4>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = yardDetail;
