// Document textual information
var React = require('react');
var ReactDOM = require('react-dom');

var Document = React.createClass({
	render: function() {
		return (<p>{ this.props.text }</p>);
	}
});

module.exports = Document;
