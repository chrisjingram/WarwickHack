var React = require('react');
var ReactDOM = require('react-dom');
var DocumentBox = require('./DocumentBox.jsx');

var api = require('./controllers/api.jsx');

var App = React.createClass({
	getInitialState: function(){
		return {
			classId: null,
			className: null
		}
	},
	componentDidMount: function(){
		api.getFirstClassId(function(err, classy){
			if(err) return console.log(err);
			console.log(classy);
			this.setState({
				classId: classy._id,
				className: classy.name
			})
		}.bind(this));
	},
	render: function(){
		return (<DocumentBox docText="test" classId={this.state.classId} className={this.state.className} />) // add classId prop
	}
});

ReactDOM.render(<App />, document.getElementById('mountPoint'));
