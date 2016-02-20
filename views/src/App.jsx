var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	render: function(){
		return (<div>hello worldd reactt {this.props.name}</div>)
	}
});

ReactDOM.render(<App name="Chris" />, document.getElementById('mountPoint'));