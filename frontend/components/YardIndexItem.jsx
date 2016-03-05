var React = require('react');
var History = require('react-router').History;
var Map = require("./map");


var YardIndexItem = React.createClass({
  mixins: [History],
  do: function(){
    console.log("props", this.props.yard);
  },
  showDetail: function(){
    this.history.push("/yard/" + this.props.yard.id);
  },
  render: function(){
    var indexItemPhotoDivStyle = {
      backgroundImage: 'url(' + this.props.yard.yard_photos[0].yard_pic_url + ')'
    };
    var ownerPhoto = {
      backgroundImage: 'url(' + this.props.yard.owner_pic_url + ')'
    };
    var cursorPointer = {
      cursor: 'pointer'
    };
    return (
      <li style={cursorPointer} className="list-group-item col-sm-6 col-xs-12 col-md-6 col-lg-6 underride list-item-no-border" onClick={this.showDetail}>
        <div className="wrapper">
          <div className="main testing2" style={indexItemPhotoDivStyle}></div>
          <div className="main2 testing3 yard-detail-owner-image-div2" style={ownerPhoto}> </div>
        </div>
          <div className="testing">
            <text className="index-item-text">{this.props.yard.title}</text>
            <br/>
            <text>{this.props.yard.description}</text>
          </div>
      </li>
    );
  }
});


module.exports = YardIndexItem;

{/*<div className="col-md-6">
  <div className="" style={indexItemPhotoDivStyle}>
  </div>
  <div className="index-item-text">
    <text>{this.props.yard.title} : {this.props.yard.description}</text>
  </div>
</div>*/}


// if(this.props.yard.yard_photos.length !== 0){
  // var indexItemPhotoDivStyle = {
  //   backgroundImage: 'url(' + this.props.yard.yard_photos[0].yard_pic_url + ')'
  // };
// }
// if (false){
//   return <div>Loading..</div>;
// } else
// return(
//   <li className="list-group-item col-sm-6 col-xs-12 col-md-6 col-lg-6 underride">
    // <div className="wrapper">
    //   <div className="main testing2" style={indexItemPhotoDivStyle}></div>
    //   <text >Hello</text>
    // </div>
    // <div className="testing">
    //   <Text>{this.props}</Text>
    // </div>
//     <button className="btn btn-success" onClick={this.do}>Click for state</button>
//   </li>
// );
// }
