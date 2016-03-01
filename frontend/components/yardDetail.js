var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');
var NavBar = require('./NavBar');
var History = require('react-router').History;
var Map = require('./map');
var UserStore = require("../stores/currentUser");

var yardDetail = React.createClass({
  mixins: [History],

  _onChange: function(){
    this.setState({yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser() });
  },
  getInitialState: function(){
    return {yard: YardStore.find(this.props.params.yardId), user: UserStore.currentUser() };
  },
  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchSingleYard(newProps.params.yardId);
  },
  componentDidMount: function(){
    this.yardListener = YardStore.addListener(this._onChange);
    ApiUtil.fetchSingleYard(this.props.params.yardId);
    // this.userListener = UserStore.addListener(this._onChange);
    // ApiUtil.fetchSingleYard(parseInt(newProps.params.yardId));
  },
  componentWillUnmount: function(){
    this.yardListener.remove();
    // UserStore.userListener.remove();
  },
  removeYard: function() {
    ApiUtil.removeYard(this.state.yard.id);
    this.navigateHome();
  },
  navigateHome: function(){
    this.history.push("/");
  },
  render: function(){
    if (!this.state.yard || !this.state.user){
      console.log(this.state)
      return (<div>loading....</div>)
    }
    return(
      <div>
        <NavBar className="col-lg-6"></NavBar>
        <Map yard={this.props.params.yardId} className="col-xs-5"></Map>
        <div className="col-md-3 col-lg-3">
          <div className="text-center">
            <p>The back of the carter: Yard Detail for {this.state.yard.title}</p>
            <p>Title: {this.state.yard.title}</p>
            <p>Description: {this.state.yard.description}</p>
            <p>User's Name: {this.state.user.fname}</p>
            <p>Lat: {this.state.yard.lat}</p>
            <p>Long: {this.state.yard.lng}</p>
            <button onClick={this.removeYard} className="btn btn-success top-buffer">Delete Yard</button>
            <buton onClick={this.navigateHome} className="btn btn-success  top-buffer left-buffer">Back to all</buton>
          </div>
        </div>

        {this.props.children}

      </div>
    )
  }
});

module.exports = yardDetail;
