var React = require("react");
var ReactDOM = require("react-dom");

var ClassName = React.createClass({
	getDefaultProps: function(){
		return {
			name: "No class name"
		}
	},
	render: function(){
		return (<h1>{this.props.name}</h1>);
	}
})

module.exports = ClassName;
