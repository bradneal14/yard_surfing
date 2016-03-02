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
    ApiUtil.createBooking(booking, this.setButtonState);
    // this.navigateToSearch();
  },
  navigateToSearch: function(){
    this.history.push("/");
  },
  buttonToggle: function(event){

  },
  setButtonState: function(){
    this.setState({success: true});
  },
  render: function(){
    if (this.state.success){
      var button = <input type="submit" className="btn btn-success center-block" value="Your Request Has Been Sent"/>;
    } else {
      var button = <input type="submit" className="btn btn-danger text-center" value="Make Request" onClick={this.buttonToggle}/>;
    }
    return(
      <div className="panel panel-primary col-md-3">
        <div className="panel-heading">
          <text className="panel-title" >Want to crashhh at {this.props.yard.title}?</text>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
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
          <div className="panel-footer">
              {this.state.errors.map(function(error){
                return <p>* {error}</p>;
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
