var React = require('react');
var History = require('react-router').History;
var Map = require("./map");


var YardIndexItem = React.createClass({
  mixins: [History],
  showDetail: function(){
    this.history.push("yard/" + this.props.yard.id);
  },
  render: function(){
    return(
      <li onClick={this.showDetail} id={"yard-" + this.props.yard.id} className="list-group-item col-xs-6">
        <p>{this.props.yard.title} : {this.props.yard.description}</p>
        <p>{this.props.yard.lat} : {this.props.yard.lng}</p>
      </li>
    );
  }
});


module.exports = YardIndexItem;
