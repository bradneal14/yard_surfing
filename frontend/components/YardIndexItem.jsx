var React = require('react');
var History = require('react-router').History;
var Map = require("./map");


var YardIndexItem = React.createClass({
  mixins: [History],
  showDetail: function(){
    this.history.push("yard/" + this.props.yard.id);
  },
  render: function(){
    if(this.props.yard.yard_photos){
      var photo = <img src={this.props.yard.yard_photos[0].yard_pic_url}></img>;
    } else {
      var photo = "";
    }
    return(
      <li onClick={this.showDetail} id={"yard-" + this.props.yard.id} className="list-group-item col-lg-4">
        {photo}
        <p>{this.props.yard.title} : {this.props.yard.description}</p>
        <p>{this.props.yard.lat} : {this.props.yard.lng}</p>
      </li>
    );
  }
});


module.exports = YardIndexItem;
