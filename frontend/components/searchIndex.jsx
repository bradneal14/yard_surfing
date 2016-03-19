var React = require('react');
var Map = require('./map');
var YardsIndex = require('./YardsIndex');
var YardStore = require('../stores/yard');

var SearchIndex = React.createClass({
  // getInitialState: function(){
  //   return {yards: YardStore.all() };
  // },
  // componentDidMount: function(){
  //   this.yardListener = YardStore.addListener(this._onChange);
  // },
  // componentWillUnmout: function(){
  //   YardStore.yardListener.remove();
  // },
  // _onChange: function(){
  //   this.setState({yards: YardStore.all() });
  // },
  render: function(){
    return (
      <div className="container-fluid below-nav">
        <div className="col-md-7 col-sm-7 col-xs-7 override navy-fill">

          <div className="navy-fill">
            <YardsIndex></YardsIndex>
          </div>
        </div>
        <div className="col-md-5 col-xs-5 search-map canvas-for-search-index" id="map-canvas">
          <Map></Map>
        </div>
      </div>
    );
  }
});

module.exports = SearchIndex;
