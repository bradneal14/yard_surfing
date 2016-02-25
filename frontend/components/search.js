var React = require('react');
var Map = require('./map');
var YardIndex = require('./index');

var Search = React.createClass({
  render: function(){
    return (
      <div>
        <p>Here we are in search</p>
        <Map></Map>
        <YardIndex></YardIndex>
      </div>
    )
  }
});

module.exports = Search;
