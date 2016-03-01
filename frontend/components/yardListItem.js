var React = require('react');
var History = require('react-router').History;
var UserStore = require('../stores/currentUser');
var YardStore = require('../stores/yard');


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
    //added all this user state stuff in order to redirect back to user show page
    //after deleting a yard. there must be an easier way to delete immediately
  },
  render: function(){
    return(
      <div className="col-md-4 row">
        <li onClick={this.showDetail} className="list-group-item">
          <p>{this.props.yard.title} : {this.props.yard.description}
          </p>
        </li>
        <button onClick={this.removeYard} className="btn btn-success left-buffer">Delete Yard</button>
      </div>
    )
  }
});


module.exports = YardListItem;
