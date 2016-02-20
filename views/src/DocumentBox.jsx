// Document container
var React = require('react');
var ReactDOM = require('react-dom');
var Document = require('./Document.jsx');
var ChoiceButton = require('./ChoiceButton.jsx');

var DocumentBox = React.createClass({
	render: function(){
		return (<div>
				<Document text={ this.props.docText } />
				<ChoiceButton buttonLabel='No' />
				<ChoiceButton buttonLabel='Yes' />
				</div>);
	}
});

module.exports = DocumentBox;
