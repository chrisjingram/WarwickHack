var React = require("react");
var ReactDOM = require("react-dom");

var api = require("../src/controllers/api.jsx");

var App = React.createClass({
	getInitialState: function(){
		return {
			documents: []
		}
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
		var trs = []

		this.state.documents.forEach(function(doc, i){
			trs.push((<tr key={i}>
				<td>{doc.className}</td>
				<td>{doc.docText}</td>
				<td>{doc.yeses.length}</td>
				<td>{doc.nos.length}</td>
				</tr>));
		});
		
		return (<table className="table table-bordered">
			<thead>
				<tr>
					<td>Class Name</td>
					<td>Document</td>
					<td>Correct</td>
					<td>Incorrect</td>
				</tr>
			</thead>
			<tbody>{trs}</tbody>
			</table>);
	}
});

ReactDOM.render(<App />, document.getElementById('mountPoint'));