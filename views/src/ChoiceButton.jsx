// Document textual information
var React = require('react');
var ReactDOM = require('react-dom');

var ChoiceButton = React.createClass({
	handleClick: function() {
		console.log("hello");
	},
	render: function() {
		return (<button onClick={this.handleClick}>{ this.props.buttonLabel }</button>);
	}
});

module.exports = ChoiceButton;
