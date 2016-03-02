var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');
var YardIndexItem = require('./YardIndexItem');
var History = require('react-router').History;
var UserStore = require('../stores/currentUser');



var YardIndex = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {yards: YardStore.all() };
  },
  componentDidMount: function(){
    this.yardListener = YardStore.addListener(this._onChange);
  },
  _onChange: function(){
    this.setState( { yards: YardStore.all() } );
  },
  componentWillUnmount: function(){
    console.log("yard index unmounting");
    this.yardListener.remove();
  },
  handleNewYard: function(event){
    event.preventDefault();
    this.navigateToNewYard();
  },
  navigateToNewYard: function() {
    this.history.push("yards/new");
  },

  render: function(){
    return (
      <div className="col-md-7 col-sm-7 col-lg-7">
        <ul className="list-group">
          {this.state.yards.map(function(yard){
            return <YardIndexItem yard={yard} key={yard.id}/>;
          })}
        <div className="col-md-3">
          <div className="">
            <button onClick={this.handleNewYard} className="btn btn-success top-buffer">New Yard</button>
          </div>
        </div>
        </ul>
      </div>
    );
  }

});


module.exports = YardIndex;
