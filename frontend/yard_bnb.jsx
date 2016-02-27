var React = require('react');
var ReactDOM = require('react-dom');
var YardStore = require('./stores/yard');
var ApiUtil = require('./util/api_util');
var YardIndex = require('./components/YardsIndex');
var Search = require('./components/search');
var YardForm = require('./components/YardForm');
var YardDetail = require('./components/yardDetail');
var hashHistory = require('react-router').hashHistory;

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Hello = React.createClass({
  render: function(){
    return <div>Hello</div>;
  }
});

var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>Yard BnB</h1></header>
              {this.props.children}
          </div>
      );
    }
  });

  var routes = (
    <Router history={hashHistory}>
     <Route path="/" component={App}>
       <IndexRoute component={Search}></IndexRoute>
     </Route>
     <Route path="/yards/new" component={YardForm}></Route>
     <Route path="/yard/:yardId" component={YardDetail}></Route>
   </Router>
 );

 document.addEventListener('DOMContentLoaded', function () {
   ReactDOM.render(routes, document.getElementById("root"))
 });
