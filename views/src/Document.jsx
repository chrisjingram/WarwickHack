// Document textual information
var React = require('react');
var ReactDOM = require('react-dom');

var Document = React.createClass({
	getDefaultProps: function(){
		return {
			docText: "testskdjhf"
		}
	},
	render: function() {
		return (<div className="docText">{ this.props.docText }</div>);
	}
});

module.exports = Document;
