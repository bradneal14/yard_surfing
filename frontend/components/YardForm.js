var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var YardForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
   return {
     description: "",
   };
 },
  handleSubmit: function(event){
    event.preventDefault();
    var yard = Object.assign({}, this.state);
    ApiUtil.createYard(yard);
  },
  handleCancel: function(event) {
    event.preventDefault();
    this.navigateToSearch();
  },
  navigateToSearch: function(){
    this.props.history.push("/");
  },
  render: function(){
    return (
      <div className="center">
        <h2>CREATE A NEW PROPERTY</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" valueLink={this.linkState('title')}/>
          <br/>
          <label>Lat:</label>
          <input type="text" valueLink={this.linkState('lat')}/>
          <br/>
          <label>Lng:</label>
          <input type="text" valueLink={this.linkState('lng')}/>
          <br/>
          <label>Description:</label>
          <input type="text" valueLink={this.linkState('description')}/>
          <br/>
          <input type="submit" value="Create Yard"/>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
});

module.exports = YardForm;
