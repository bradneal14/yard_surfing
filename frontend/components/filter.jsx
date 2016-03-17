var React = require("react");
var FilterStore = require('../stores/filter');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiActions = require("../actions/api_actions");

var Filter = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {filter: {fire_status: false, water_status: false, shower_status: false, toilet_status: false}};
  },
  buttonClicked: function(){
    ApiActions.activateFilter();
  },
  _onChange: function(){
    this.setState({filter: FilterStore.getInfo()});
    console.log(this.state);
  },
  render: function(){
    return (
      <div>
        <label>Guests Will Have Access to Drinking Water:</label>
        <input type="checkbox" valueLink={this.linkState('water_status')} className=""/>
        <br/>
        <label>Guests Will Have Access to a Toilet:</label>
        <input type="checkbox" valueLink={this.linkState('toilet_status')} className=""/>
        <br/>
        <label>Guests Will Have Access to a Shower:</label>
        <input type="checkbox" valueLink={this.linkState('shower_status')} className=""/>
        <br/>
        <label>Guests are Allowed to Make Fire: </label>
        <input type="checkbox" valueLink={this.linkState('fire_status')} className=""/>
        <br/>
        <button className="btn blue-btn" onClick={this.buttonClicked}>CLICK ME</button>
      </div>
    );
  }
});

module.exports = Filter;
