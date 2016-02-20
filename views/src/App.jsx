var React = require('react');
var ReactDOM = require('react-dom');

var DocumentBox = React.createClass({
	render: function(){
		return (<div class="documentBox">
				<Document text={ this.props.docText } />
				</div>);
	}
});

var Document = React.createClass({
	render: function() {
		return (<p>{ this.props.text }</p>);
	}
});

var ChoiceButton = React.createClass({
	// Unimplemented class to represent 'no' and 'yes' buttons
	render: function() {
		return ();
	}
});

ReactDOM.render(<DocumentBox docText="test"/>, document.getElementById('mountPoint'));
		return (<div>hello worldd reactt {this.props.name}</div>)
	}
});
