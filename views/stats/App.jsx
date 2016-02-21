var React = require("react");
var ReactDOM = require("react-dom");

var api = require("../src/controllers/api.jsx");

var App = React.createClass({
	getInitialState: function(){
		return {}
	},
	componentDidMount: function(){
		api.getDocumentsForClass('food',function(err,data){
			if(err) console.log(err);
			this.setState({
				documents: data
			});
		}.bind(this));
	},
	render: function(){
		var string = JSON.stringify(this.state.documents);
		
		return (<table class="table">{string}</table>);
	}
});

ReactDOM.render(<App />, document.getElementById('mountPoint'));