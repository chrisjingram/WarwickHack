// Document container
var React = require('react');
var ReactDOM = require('react-dom');
var Document = require('./Document.jsx');

var DocumentBox = React.createClass({
	render: function(){
		return (<div class="documentBox">
				<Document text={ this.props.docText } />
				</div>);
	}
});

module.exports = DocumentBox;
