var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require("react-router").History;
var ApiUtil = require("../util/api_util");


var BookingReqBox = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function(){
    return {
      start_date: "",
    };
   },
  handleSubmit: function(event){
    event.preventDefault();
    var booking = Object.assign({}, this.state);
    ApiUtil.createBooking(booking);
    // console.log(booking)
    this.navigateToSearch();
  },
  navigateToSearch: function(){
    this.history.push("/");
  },
  render: function(){
    return(
      <div className="col-md-3">
        <form onSubmit={this.handleSubmit}>
          <label>Start: </label>
          <input
            type="text"
            valueLink={this.linkState('start_date')}
            className=""/>
          <br/>
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
          <br/>
          <input type="submit" className="btn btn-success" value="Make Request"/>
        </form>
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
