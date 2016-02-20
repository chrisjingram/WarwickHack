var React = require('react');
var ReactDOM = require('react-dom');
var DocumentBox = require('./DocumentBox.jsx');

var ChoiceButton = React.createClass({
	// Unimplemented class to represent 'no' and 'yes' buttons
	render: function() {
		return <p>button test</p>;
	}
});

ReactDOM.render(<DocumentBox docText="test"/>,
                document.getElementById('mountPoint'));
