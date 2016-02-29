var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');
var NavBar = require('./NavBar');
var History = require('react-router').History;
var Map = require('./map');

var yardDetail = React.createClass({
  mixins: [History],

  _onChange: function(){
    this.setState({yard: YardStore.find(this.props.params.yardId)});
  },
  getInitialState: function(){
    return {yard: YardStore.find(this.props.params.yardId)};
  },
  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchSingleYard(newProps.params.yardId);
  },
  componentDidMount: function(){
    this.yardListener = YardStore.addListener(this._onChange);
    ApiUtil.fetchSingleYard(this.props.params.yardId);
    // ApiUtil.fetchSingleYard(parseInt(newProps.params.yardId));
  },
  componentWillUnmout: function(){
    YardStore.yardListener.remove();
  },
  removeYard: function() {
    ApiUtil.removeYard(this.state.yard.id);
    this.navigateHome();
  },
  navigateHome: function(){
    this.history.push("/");
  },
  render: function(){
    if (!this.state.yard){
      return (<div>loading..</div>)
    }
    return(
      <div>
        <NavBar></NavBar>
        <Map></Map>
        <div className="yard-detail-pane">
          <div className="detail">
            <p>The back of the carter: detail</p>
            <p>{this.state.yard.title}</p>
            <p>{this.state.yard.description}</p>
            <p>its under this line</p>
            <p>{this.state.yard.fire_status}</p>
            <p>its over this line</p>
            <p>{this.state.yard.lat}</p>
            <p>{this.state.yard.lng}</p>
          </div>
        </div>
        <button onClick={this.removeYard} className="btn btn-success top-buffer">Delete Yard</button>

        {this.props.children}

      </div>
    )
  }
});

module.exports = yardDetail;
