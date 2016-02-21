// Document container
var React = require('react');
var ReactDOM = require('react-dom');
var Document = require('./Document.jsx');
var ChoiceButton = require('./ChoiceButton.jsx');
var ClassName = require('./ClassName.jsx');
var Hammer = require('react-hammerjs');

var api = require("./controllers/api.jsx");

var DocumentBox = React.createClass({
	getInitialState: function(){
		return {
			docId: null,
			docText: null,
		}
	},
	getDefaultProps: function(){
		return {
			classId: null,
			className: "no classname provided"
		}
	},
	newDoc: function(){
		if(this.state.classId){
			api.getRandomDoc(this.state.classId, function(err,result){
				if(err) return console.log(err);
				console.log(result.data);
				this.setState({
					docId: result.data._id,
					docText: result.data.docText
				});
			}.bind(this))
		}
		
	},
	handleYes: function(){
		api.updateYes(this.state.docId, 'testuser', function(err, result){
			if(err) return console.log(err);
			return this.newDoc();
		}.bind(this));
	},
	handleNo: function(){
		api.updateNo(this.state.docId, 'testuser', function(err, result){
			if(err) return console.log(err);
			return this.newDoc();
		}.bind(this));
	},
	handleSwipe: function(ev){
		console.log(ev.type);
	},
	componentDidMount: function(){
		console.log("componentDidMount");
		console.log(this.props);
		// this.setState({
		// 	classId: this.props.classId,
		// 	className: this.props.className
		// }, function(){
		// 	this.newDoc();
		// })
	},
	componentWillReceiveProps: function(nextProps) {
	  this.setState({
			classId: nextProps.classId,
			className: nextProps.className
		}, this.newDoc)
	},
	render: function(){
		return (<div className="main container" onSwipe={this.handleSwipe}>
					<div className="main-box">
						<ClassName name={this.props.className} />
						<Document docText={ this.state.docText } />
					</div>
					<div className="buttons">
						<button className="yesnobutton no" onClick={this.handleNo}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
						<button className="yesnobutton yes" onClick={this.handleYes}><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
					</div>
				</div>);
	}
});

module.exports = DocumentBox;
