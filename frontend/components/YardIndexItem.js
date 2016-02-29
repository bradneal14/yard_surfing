var React = require('react');
var History = require('react-router').History;


var YardIndexItem = React.createClass({
  mixins: [History],
  showDetail: function(){
    this.history.push("yard/" + this.props.yard.id);
  },
  render: function(){
    return(
      <li onClick={this.showDetail} className="list-group-item col-xs-6">
        <p>{this.props.yard.title} : {this.props.yard.description}</p>
        <p>{this.props.yard.lat} : {this.props.yard.lng}</p>
      </li>
    )
  }
});


module.exports = YardIndexItem;
