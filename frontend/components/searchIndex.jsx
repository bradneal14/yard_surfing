var React = require('react');
var Map = require('./map');
var YardsIndex = require('./YardsIndex');
var YardStore = require('../stores/yard');
var $ = require('jquery');


var transitionWarning =  function(){
  window.setTimeout(function(){$("#warning").addClass("end");}, 4000);
  window.setTimeout(function(){$("#warning").addClass("change-color");}, 1200);
  window.setTimeout(function(){$("#search-index").addClass("index-margin");}, 4000);

  // window.setTimeout(function(){$("#warning-text").addClass("end");}, 1000);
  // window.setTimeout(function(){$("#warning").addClass("warning1");}, 2000);
  // window.setTimeout(function(){$("#warning").removeClass("warning1");}, 2500);
  // window.setTimeout(function(){$("#warning").addClass("warning2");}, 2500);
  // window.setTimeout(function(){$("#warning").removeClass("warning2");}, 3000);
  // window.setTimeout(function(){$("#warning").addClass("warning3");}, 3000);
};

var SearchIndex = React.createClass({
  componentDidMount: function(){
    transitionWarning();
  },
  // componentWillUnmout: function(){
  //   YardStore.yardListener.remove();
  // },
  // _onChange: function(){
  //   this.setState({yards: YardStore.all() });
  // },
  render: function(){
    return(
      <div className="container-fluid below-nav">
        <div id="search-index" className="col-md-7 col-sm-7 col-xs-7 override">
          <div id="warning" className="warning-text hidden-warning warning col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          *All Searches Redirect to San Francisco. Zoom out map for International*
          </div>
          <div className="nada">
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
