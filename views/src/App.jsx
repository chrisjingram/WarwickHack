var React = require('react');
var ReactDOM = require('react-dom');
var DocumentBox = require('./DocumentBox.jsx');

ReactDOM.render(<DocumentBox docText="test" />,
                document.getElementById('mountPoint'));
