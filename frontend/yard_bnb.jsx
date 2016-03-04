var React = require('react');
var ReactDOM = require('react-dom');
var YardStore = require('./stores/yard');
var ApiUtil = require('./util/api_util');
var YardIndex = require('./components/YardsIndex');
var SearchIndex = require('./components/searchIndex');
var YardForm = require('./components/YardForm');
var YardDetail = require('./components/yardDetail');
var hashHistory = require('react-router').hashHistory;
var App = require('./components/App');
var userDetail = require('./components/userDetail');
var profileEdit = require("./components/profileEdit");
var Landing = require("./components/landing");

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;


var routes = (
  <Router onUpdate={function(){window.scrollTo(0, 0);}} history={hashHistory}>
   <Route path="/" component={App}>
     <IndexRoute component={Landing}></IndexRoute>
     <Route path="/search" component={SearchIndex}></Route>
     <Route path="/yards/new" component={YardForm}></Route>
     <Route path="/yard/:yardId" component={YardDetail}></Route>
     <Route path="/users/:userId" component={userDetail}></Route>
     <Route path="/edit_profile" component={profileEdit}></Route>
   </Route>
 </Router>
 );

 document.addEventListener('DOMContentLoaded', function () {
   ReactDOM.render(routes, document.getElementById("root"));
 });
