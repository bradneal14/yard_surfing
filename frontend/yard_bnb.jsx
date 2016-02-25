var React = require('react');
var ReactDOM = require('react-dom');
var YardStore = require('./stores/yard');
var ApiUtil = require('./util/api_util');
var YardIndex = require('./components/index');
var Search = require('./components/search');


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Search/>, document.getElementById("root"))
});
