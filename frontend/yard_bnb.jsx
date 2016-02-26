var React = require('react');
var ReactDOM = require('react-dom');
var YardStore = require('./stores/yard');
var ApiUtil = require('./util/api_util');
var YardIndex = require('./components/index');
var Search = require('./components/search');
var YardForm = require('./components/YardForm');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;



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
    <Router>
     <Route path="/" component={App}>
       <IndexRoute component={Search}/>
     </Route>
     <Route path="yards/new" component={YardForm}></Route>
   </Router>
 );

 document.addEventListener('DOMContentLoaded', function () {
   ReactDOM.render(routes, document.getElementById("root"))
 });
