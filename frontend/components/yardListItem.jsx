var React = require('react');
var History = require('react-router').History;
var UserStore = require('../stores/currentUser');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');


var YardListItem = React.createClass({
  mixins: [History],
  showDetail: function(){
    // ApiUtil.fetchYards();
    this.history.push("yard/" + this.props.yard.id);
  },
  removeYard: function(event) {
    event.preventDefault();
    ApiUtil.removeYard(this.props.yard.id);
    this.history.push("users/" + this.state.user.id);
  },
  render: function(){
    return(
      <div className="col-sm-3 image-contain-div">
        <li onClick={this.showDetail} className="list-group-item">
          <p>{this.props.yard.title}</p>
          <img src={this.props.photo} className="profile-edit-yard-pic"/>
        </li>
        <button onClick={this.removeYard} className="btn btn-danger left-buffer">Delete Yard</button>
      </div>
    );
  }
});


module.exports = YardListItem;
