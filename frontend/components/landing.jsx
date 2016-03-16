var React = require('react');
var NavBar = require('./NavBar');
var History = require('react-router').History;
var UserStore = require('../stores/currentUser');

var Landing = React.createClass({
  mixins: [History],
  navigateToSearch: function(){
    if (UserStore.currentUser()){
      this.history.push("/search");
    } else {
      console.log("you cant search unless you sign in");
    }
  },
  render: function(){
    var landingCoverPhoto = {
      backgroundImage: "url('beach-camping.jpg')"
    };
    return(
      <div style={landingCoverPhoto} className="landing-cover">
        <h1 className="landing-text">Welcome.</h1>
        <div className="search-bar-strip">
          <form>
            <div className="form-group col-md-4 col-sm-5 col-xs-6 col-lg-4 center-button">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Where would you like to go.."/>
                <span className="input-group-btn">
                  <button className="btn red-btn" onClick={this.navigateToSearch}>Head to search</button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

window.Landing = Landing;
module.exports = Landing;
