var React = require('react');
var ReactDOM = require('react-dom');
var DocumentBox = require('./DocumentBox.jsx');

var App = React.createClass({
	render: function(){
		return (<DocumentBox docText="test" />) // add classId prop
	}
});

ReactDOM.render(<App />, document.getElementById('mountPoint'));
