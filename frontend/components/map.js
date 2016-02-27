var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');

var _markers = [];
var Map = React.createClass({

  componentDidMount: function(){
    YardStore.addListener(this._onChange);
     var mapDOMNode = this.refs.map;
     var mapOptions = {
       center: {lat: 37.7758, lng: -122.435},
       zoom: 12
     };

   this.map = new google.maps.Map(mapDOMNode, mapOptions);

   this.map.addListener('idle', function(){
     var latLngBounds = this.getBounds();
     var southWest = latLngBounds.getSouthWest();
     var northEast = latLngBounds.getNorthEast();
     var bounds = {
       northEast: {lat: northEast.lat(), lng: northEast.lng()},
       southWest: {lat: southWest.lat(), lng: southWest.lng()}
     }

     ApiUtil.fetchYards(bounds);
   });

  },

  _onChange: function(){
    this.placeMarks();
  },

  placeMarks: function(){
    _markers.forEach(function(marker){
      marker.setMap(null);
    });
    _markers = [];

    var latLngAry = [];

    YardStore.all().forEach(function(el) {
      latLngAry.push({lng: el.lng, lat: el.lat});
    });

    latLngAry.forEach(function(coords){
      var marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        amimation: google.maps.Animation.DROP
      });
      marker.setMap(this.map);
      _markers.push(marker);
    }.bind(this));

  },
  render: function(){
    return (
      <div className="map col-md-6" ref="map">
      </div>
    )
  }
});

module.exports = Map;
