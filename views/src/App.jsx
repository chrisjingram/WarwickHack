var React = require('react');
var ReactDOM = require('react-dom');
var DocumentBox = require('./DocumentBox.jsx');

var api = require('./controllers/api.jsx');

var App = React.createClass({
	getInitialState: function(){
		return {
			
		}
	},
	componentDidMount: function(){
		console.log('App componentDidMount');
		this.serverRequest = api.getFirstClassId(function(err, data){
			if(err) return console.log(err);
			console.log("getFirstClassId", data);
			this.setState({
				classId: data._id,
				className: data.name
			})
			
		}.bind(this));
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
	},
	render: function(){
		console.log("render");
		return (<DocumentBox docText="test" classId={this.state.classId} className={this.state.className} />) // add classId prop
	}
});

ReactDOM.render(<App />, document.getElementById('mountPoint'));
