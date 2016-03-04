var React = require('react');
var Map = require('./map');
var YardsIndex = require('./YardsIndex');
var YardStore = require('../stores/yard');

var SearchIndex = React.createClass({
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
      <div className="container-fluid below-nav">
        <div className="col-md-7">
          <YardsIndex></YardsIndex>
        </div>
        <div className="col-md-5 hidden-xs search-map canvas-for-search-index" id="map-canvas">
          <Map></Map>
        </div>
      </div>
    );
  }
});

module.exports = SearchIndex;
