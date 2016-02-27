var React = require('react');
var Map = require('./map');
var YardIndex = require('./YardsIndex');

var Search = React.createClass({
  render: function(){
    return (
      <div className="col-md-12">
        <p>Here we are in search</p>
        <Map></Map>
        <YardIndex></YardIndex>
      </div>
    )
  }
});

module.exports = Search;
