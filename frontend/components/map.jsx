var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;

var _markers = [];


var Map = React.createClass({
  mixins: [History],
  componentDidMount: function(){
    window.infoWindow = new google.maps.InfoWindow();
    google.maps.InfoWindow.prototype.isOpen = function(){
        var windowMap = window.infoWindow.getMap();
        return (windowMap !== null && typeof windowMap !== "undefined");
    };
    console.log("map mounted");
    this.yardListener = YardStore.addListener(this._onChange);
    // UserStore.addListener(this._onChange);
     var mapDOMNode = this.refs.map;
     var mapOptions = {
       center: {lat: 37.7758, lng: -122.435},
       zoom: 12,
       mapTypeControlOptions: {
         mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
       }
     };

     if (this.props.yard){
       var currentYard = YardStore.find(this.props.yard);
       var newLat = currentYard.lat;
       var newLng = currentYard.lng;
       mapOptions['center'] = {lat: newLat, lng: newLng};
       mapOptions['zoom'] = 16;
     }

     this.map = new google.maps.Map(mapDOMNode, mapOptions);

     this.map.addListener('idle', function(){
       var latLngBounds = this.getBounds();
       var southWest = latLngBounds.getSouthWest();
       var northEast = latLngBounds.getNorthEast();
       var bounds = {
         northEast: {lat: northEast.lat(), lng: northEast.lng()},
         southWest: {lat: southWest.lat(), lng: southWest.lng()}
       };
       ApiUtil.fetchYards(bounds);
     });

  },

  _onChange: function(){
    console.log("some kinda change in map");
    console.log(YardStore.all());
    this.placeMarks();
  },
  componentWillUnmount: function(){
    console.log("map unmounting");
    this.yardListener.remove();
  },
  placeMarks: function(){
    var that = this;
    // _markers.forEach(function(marker){
    //   console.log("placing mark")
    //   marker.setMap(null);
    // });
    _markers = [];

    var latLngAry = [];

    YardStore.all().forEach(function(el) {
      latLngAry.push({lng: el.lng, lat: el.lat, title: el.title, photo: el.yard_photos[0].yard_pic_url, location: el.location, yardId: el.id});
    });




    latLngAry.forEach(function(coords){
      var marker = new google.maps.Marker({
        position: coords
      });

      var title = coords.title;
      var yardId = coords.yardId;
      var location = coords.location;
      var picture = coords.photo;
      var contentString ='<div id="contentWindow">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<img class="index-map-thumb" src=' + picture +'></img>' +
      '<div>'+
      '<h2 id="firstHeading" class="index-map-thumb-title firstHeading">' + title + '</h2>'+
      '<h2 id="firstHeading" class="index-map-thumb-location firstHeading">' + location + '</h2>'+
      '</div>'+
      '</div>'+
      '</div>';


      marker.setMap(this.map);
      marker.addListener("click", function(){
        window.infoWindow.setOptions({
          content: contentString
        });
        window.infoWindow.open(this.map, marker);
        google.maps.event.addDomListener(document.getElementById("contentWindow"), "click", function(){
          that.history.push("/yard/" + yardId);
        });
      });
      // marker.setAnimation(google.maps.Animation.DROP);
      marker.setIcon({url: "/black_marker_icon.png"} );

      // marker.addListener('click', function() {
      //   if (infoWindow) {
      //     infoWindow.close();
      //   }
      //   var infoWindow = new google.maps.InfoWindow({
      //     content: "ehy"
      //   });
      //   infoWindow.open(this.map, marker);
      // });
      _markers.push(marker);

      google.maps.event.addListener(this.map, "click", function(event) {
        window.infoWindow.close();
      });

    }.bind(this));
  },
  render: function(){
    return (
      <div className="map search-map" ref="map" id="map_canvas">
      </div>
    );
  }
});

module.exports = Map;
