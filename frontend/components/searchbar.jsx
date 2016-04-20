var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function(){
    return (
      {query: "", greeting: "Where would you like to go.."}
    );
  },
  printInput: function(event){
    event.preventDefault();
    this.history.push("search/");
    console.log(this.state.query);
    window.searchQuery = this.state.query;
  },
  render: function(){
    return (
        <div className="">
          <form onSubmit={this.printInput}>
            <div className="form-group col-md-4 col-sm-5 col-xs-6 col-lg-4 top-search-button">
              <div className="input-group">
                <input type="text" className="form-control my-search-input-top"
                  valueLink={this.linkState('query')}
                  placeholder={this.state.greeting}/>
                <span className="input-group-btn my-btn-adjust">
                  <button className="nav-search-btn btn red-btn" type="submit"><img className="nav-search-img" src="https://meraki.cisco.com/blog/wp-content/themes/shire/images/search-icon.png"></img></button>
                </span>
              </div>
            </div>
          </form>
        </div>
    );
  }
});

module.exports = SearchBar;
