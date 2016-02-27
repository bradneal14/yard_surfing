var React = require('react');
var YardStore = require('../stores/yard');
var ApiUtil = require('../util/api_util');

var yardDetail = React.createClass({

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
  render: function(){
    if (!this.state.yard){
      console.log(this.state)
      return (<div>loading</div>)
    }
    return(
      <div>
        <div className="yard-detail-pane">
          <div className="detail">
            <p>The back of the carter: detail</p>
            <p>{this.state.yard.title}</p>
            <p>{this.state.yard.description}</p>
          </div>
        </div>

        {this.props.children}

      </div>
    )
  }
});

module.exports = yardDetail;
