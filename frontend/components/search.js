var React = require('react');
var Map = require('./map');
var YardIndex = require('./index');

var Search = React.createClass({
  handleNewYard: function(event){
    event.preventDefault();
    this.navigateToNewYard();
  },
  navigateToNewYard: function() {
    this.props.history.push("yards/new");
  },
  render: function(){
    return (
      <div>
        <p>Here we are in search</p>
        <Map></Map>
        <YardIndex></YardIndex>
        <button onClick={this.handleNewYard}>New Yard</button>
      </div>
    )
  }
});

module.exports = Search;
