var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require("react-router").History;
var ApiUtil = require("../util/api_util");
var BookingStore = require("../stores/bookings");


var BookingReqBox = React.createClass({
  mixins: [LinkedStateMixin, History],
  componentDidMount: function(){
    this.bookingListener = BookingStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.bookingListener.remove();
  },
  _onChange: function(){
    var errors = BookingStore.allErrors();
    console.log("ERRORS", errors);
    this.setState({errors: errors});
  },
  getInitialState: function(){
    var yardId = this.props.yard.id;
    var userId = this.props.user.id;
    return {
      start_date: "", yard_id: yardId, requester_id: userId, errors: [], success: false
    };
   },
  handleSubmit: function(event){
    event.preventDefault();
    var booking = Object.assign({}, this.state);
    console.log("CHECK HERE", booking.num_guests);
    ApiUtil.createBooking(booking, this.setButtonState);
    // this.navigateToSearch();
  },
  navigateToSearch: function(){
    this.history.push("/");
  },
  buttonToggle: function(event){
    console.log("STATE", this.state);
  },
  setButtonState: function(){
    this.setState({success: true});
  },
  render: function(){
    if (this.state.success && this.state.num_guests != "Select.."){
      var button = <input type="submit" className="btn btn-success request-form-submit" value="Your Request Has Been Sent"/>;
    } else {
      var button = <input type="submit" className="btn btn-danger request-form-submit" value="Make Request" onClick={this.buttonToggle}/>;
    }
    return(
      <div className="panel panel-primary display-center panel-no-border">
        <div className="panel-heading">
          <text className="panel-title">Want to crash at {this.props.yard.title}?</text>
        </div>
        <div className="panel-body">
          <form className="" onSubmit={this.handleSubmit} id="bookingReqForm">
            <label className="form-inline">Start:  </label>
            <input
              type="date"
              valueLink={this.linkState('start_date')}
              className="form-control request-panel-input"/>
            <br/>
            <br/>
            <label>End: </label>
            <input
              type="date"
              valueLink={this.linkState('end_date')}
              className="form-control request-panel-input"/>
            <br/>
            <br/>
            <label className="form-inline">Guests: </label>
            <input name="guest-selector" type="hidden" default="17"/>
            <select required name="guest-selector" valueLink={this.linkState('num_guests')} className="request-panel-selector form-inline float-right" >
              <option selected="selected" >Select..</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <br/>
            <br/>
            {button}
          </form>
          <div className="text-danger">
            <br/>
              {this.state.errors.map(function(error){
                return <p className="text-center">* {error}</p>;
              })}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BookingReqBox;


{/*<form onSubmit={this.handleSubmit}>
  <label>Start: </label>
  <input
    type="date"
    valueLink={this.linkState('start_date')}
    className=""/>
  <br/>
  <label>End: </label>
  <input
    type="date"
    valueLink={this.linkState('end_date')}
    className=""/>
  <br/>
  <label>Num Guests: </label>
  <input
    type="text"
    valueLink={this.linkState('num_guests')}
    className=""/>
  <br/>
  <br/>
  {button}
</form>
<div>
  <br/>
    {this.state.errors.map(function(error){
      return <p>* {error}</p>;
    })}
</div>*/}
