const React = require('react');
const ReactDom = require('react-dom');
const global = require('./components.global');

ReactDom.render(
  <global/>,
  document.getElementById('app')
)
