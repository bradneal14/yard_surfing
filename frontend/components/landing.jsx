var React = require('react');
var NavBar = require('./NavBar');
var History = require('react-router').History;

var Landing = React.createClass({
  mixins: [History],
  navigateToSearch: function(){
    this.history.push("/search");
  },
  render: function(){
    var landingCoverPhoto = {
      backgroundImage: 'url(' + 'http://cdn.usefulstuff.io/2015/10/Landing-A-Plane.jpg' + ')'
    };
    return(
      <div style={landingCoverPhoto} className="landing-cover">
        <form>
          <div className="form-group col-md-4 col-sm-5 col-xs-12 col-lg-4 center-button">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Where would you like to go.."/>
                <span className="input-group-btn">
                  <button className="btn btn-success" onClick={this.navigateToSearch}>Head to search</button>
                </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

window.Landing = Landing;
module.exports = Landing;
