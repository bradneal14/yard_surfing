var React = require('react');
var Map = require('./map');
var YardsIndex = require('./YardsIndex');
var YardStore = require("../stores/yard");

var Search = React.createClass({
  // getInitialState: function(){
  //   return {yards: YardStore.all() }
  // },
  // componentDidMount: function(){
  //   this.yardListener = YardStore.addListener(this._onChange);
  // },
  // componentWillUnmout: function(){
  //   YardStore.yardListener.remove();
  // },
  // _onChange: function(){
  //   this.setState({yards: YardStore.all() })
  // },
  render: function(){
    return (
      <div className="col-xs-12 tan-bg-fill">
        <p>Here we are in search</p>
        <Map></Map>
        <YardsIndex></YardsIndex>
      </div>
    );
  }
});

module.exports = Search;