var React = require('react');
var History = require('react-router').History;


var YardListItem = React.createClass({
  mixins: [History],
  showDetail: function(){
    this.history.push("yard/" + this.props.yard.id);
  },
  render: function(){
    return(
      <li onClick={this.showDetail} className="list-group-item">
        <p>{this.props.yard.title} : {this.props.yard.description}</p>
      </li>
    )
  }
});


module.exports = YardListItem;
