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
    console.log("ERRORS", errors)
    this.setState({errors: errors})
  },
  getInitialState: function(){
    var yard = this.props.yard;
    var user = this.props.user.id;
    return {
      start_date: "", yard_id: yard, requester_id: user, errors: [], success: false
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
      var button = <input type="submit" className="btn btn-success" value="Your Request Has Been Sent"/>;
    } else {
      var button = <input type="submit" className="btn btn-danger" value="Make Request" onClick={this.buttonToggle}/>;
    }
    return(
      <div className="col-md-3">
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
        <div>
          <br/>
            {this.state.errors.map(function(error){
              return <p>* {error}</p>;
            })}
        </div>
      </div>
    )
  }
});

module.exports = BookingReqBox;


{/*<div className="col-md-6">
  <div className="container">
    <div className='col-md-2'>
      <div className="form-group">
        <div className='input-group date' id='datetimepicker6'>
          <input type='text' className="form-control" />
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-calendar"></span>
          </span>
        </div>
      </div>
    </div>
    <div className='col-md-2'>
      <div className="form-group">
        <div className='input-group date' id='datetimepicker7'>
          <input type='text' className="form-control" />
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-calendar"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>*/}



{
  /*<br/>
  <form>
    <label>Start: </label>
    <input
      type="text"
      valueLink={this.linkState('start_date')}
      className=""/>

  </form>
<label>End: </label>
<input
  type="text"
  valueLink={this.linkState('end_date')}
  className=""/>
<br/>
<label>Num Guests: </label>
<input
  type="text"
  valueLink={this.linkState('num_guests')}
  className=""/>
<br/>
<label>Requester id: </label>
<input
  type="text"
  valueLink={this.linkState('requester_id')}
  className=""/>
<br/>
<label>yard id: </label>
<input
  type="text"
  valueLink={this.linkState('yard_id')}
  className=""/>
<br/>*/}
