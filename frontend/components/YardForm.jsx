 var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var NavBar = require('./NavBar');
var ApiUtil = require('../util/api_util');

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
    this.navigateToSearch();
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
      <div>
        <div className="container-fluid">
          <h2 className="text-center">List Your Yard</h2>
          <h4 className="text-center">YardSurfing allows you offer up your yard for those looking to crash</h4>
          <br/>
          <section>
            <form onSubmit={this.handleSubmit} className="form-group" className='grey-bg-fill col-xs-12'>
              <div className="col-xs-4">
                <label>Title</label>
                <input type="text" valueLink={this.linkState('title')} className="form-control" placeholder="Name your yard"/>
                <br/>
                <label>Address:</label>
                <input type="text" valueLink={this.linkState('location')} className="form-control" placeholder="Where is it?"/>
                <br/>
                <label>Lat:</label>
                <input type="text" valueLink={this.linkState('lat')} className="form-control"/>
                <br/>
                <label>Lng:</label>
                <input type="text" valueLink={this.linkState('lng')} className="form-control"/>
                <br/>
                <label>Description:</label>
                <textarea valueLink={this.linkState('description')} className="form-control" placeholder="Tell us about it"/>
                <br/>
                <label>Max Guests:</label>
                <select valueLink={this.linkState('max_guest_num')} className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
                <br/>
              </div>
              <div className="col-sm-4">
                <label>Add an Image URL to Your Listing: </label>
                <input type="text" valueLink={this.linkState('yard_pic_url')} className="form-control"/>
                <br/>
                <label>Guests Will Have Access to Drinking Water:</label>
                <input type="checkbox" valueLink={this.linkState('water_status')} className=""/>
                <br/>
                <label>Guests Will Have Access to a Toilet:</label>
                <input type="checkbox" valueLink={this.linkState('toilet_status')} className=""/>
                <br/>
                <label>Guests Will Have Access to a Shower:</label>
                <input type="checkbox" valueLink={this.linkState('shower_status')} className=""/>
                <br/>
                <label>Guests are Allowed to Make Fire: </label>
                <input type="checkbox" valueLink={this.linkState('fire_status')} className=""/>
                <br/>
                <div className="text-center col-sm-4">
                  <input className="btn btn-success" type="submit" value="Create Yard"/>
                  <button className="btn btn-danger left-buffer" onClick={this.handleCancel}>Cancel</button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
});

module.exports = YardForm;
