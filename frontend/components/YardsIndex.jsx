var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');
var YardIndexItem = require('./YardIndexItem');
var History = require('react-router').History;



var YardIndex = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {yards: YardStore.all() };
  },
  componentDidMount: function(){
    this.yardListener = YardStore.addListener(this._onChange);
  },
  _onChange: function(){
    this.setState( { yards: YardStore.all() } );
  },
  componentWillUnmount: function(){
    console.log("yard index unmounting");
    this.yardListener.remove();
  },
  handleNewYard: function(event){
    event.preventDefault();
    this.navigateToNewYard();
  },
  navigateToNewYard: function() {
    this.history.push("yards/new");
  },

  render: function(){
    return (
      <div className="">
        <br></br>
        <ul className="list-group">
          {this.state.yards.map(function(yard){
            return <YardIndexItem yard={yard} key={yard.id}/>;
          })}
        </ul>
      </div>
    );
  }

});


module.exports = YardIndex;
