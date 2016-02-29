var React = require('react');
var Map = require('./map');
var YardsIndex = require('./YardsIndex');

var Search = React.createClass({
  render: function(){
    return (
      <div className="col-xs-12 tan-bg-fill">
        <p>Here we are in search</p>
        <Map></Map>
        <YardsIndex></YardsIndex>
      </div>
    )
  }
});

module.exports = Search;
