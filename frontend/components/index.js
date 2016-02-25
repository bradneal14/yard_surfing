var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');

var YardIndex = React.createClass({

  getInitialState: function() {
    return {yards: YardStore.all() }
  },
  componentDidMount: function(){
    YardStore.addListener(this._onChange);
  },

  _onChange: function(){
    this.setState( { yards: YardStore.all() } );
  },

  render: function(){
    return (
      <p>Hello</p>
    )
  }

});


module.exports = YardIndex;
