var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');

var _markers = [];
var Map = React.createClass({
  componentDidMount: function(){
    console.log("map mounted");
    this.yardListener = YardStore.addListener(this._onChange);
    // UserStore.addListener(this._onChange);

    //the lines below here enable the special colors for the map:
    // var styles = [
    //   {
    //     stylers: [
    //       { hue: "#b35b4f" },
    //       { saturation: 1000 }
    //     ]
    //   },{
    //     featureType: "road",
    //     elementType: "geometry",
    //     stylers: [
    //       { lightness: 50 },
    //       { visibility: "simplified" }
    //     ]
    //   },{
    //     featureType: "road",
    //     elementType: "labels",
    //     stylers: [
    //       { visibility: "off" }
    //     ]
    //   }
    // ];
    //
    // var styledMap = new google.maps.StyledMapType(styles,
    // {name: "Styled Map"});
    //Special color lines above:

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
       mapOptions['zoom'] = 15;
     }

     this.map = new google.maps.Map(mapDOMNode, mapOptions);

    //Below are the other two lines for map color styling
    //  this.map.mapTypes.set('map_style', styledMap);
    //  this.map.setMapTypeId('map_style');

     this.map.addListener('idle', function(){
       var latLngBounds = this.getBounds();
       var southWest = latLngBounds.getSouthWest();
       var northEast = latLngBounds.getNorthEast();
       var bounds = {
         northEast: {lat: northEast.lat(), lng: northEast.lng()},
         southWest: {lat: southWest.lat(), lng: southWest.lng()}
       };
       console.log(bounds);
       ApiUtil.fetchYards(bounds);

     });

  },

  _onChange: function(){
    console.log("some kinda change in map");
    console.log(YardStore.all());
    this.placeMarks();
  },
  componentWillUnmount: function(){
    console.log("map will unmount");
    this.yardListener.remove();
  },
  placeMarks: function(){
    // _markers.forEach(function(marker){
    //   console.log("placing mark")
    //   marker.setMap(null);
    // });
    _markers = [];

    var latLngAry = [];

    YardStore.all().forEach(function(el) {
      latLngAry.push({lng: el.lng, lat: el.lat});
    });



    latLngAry.forEach(function(coords){
      var marker = new google.maps.Marker({
        position: coords,
      });



      marker.setMap(this.map);
      // marker.setAnimation(google.maps.Animation.DROP);
      marker.setIcon({url: "/assets/black_marker_icon.png"} );

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
    }.bind(this));
  },
  render: function(){
    return (
      <div className="map col-xs-5 col-lg-5 " ref="map">
      </div>
    );
  }
});

module.exports = Map;
