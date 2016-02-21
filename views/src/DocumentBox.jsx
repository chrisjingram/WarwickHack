// Document container
var React = require('react');
var ReactDOM = require('react-dom');
var Document = require('./Document.jsx');
var ChoiceButton = require('./ChoiceButton.jsx');
var ClassName = require('./ClassName.jsx');

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
			classId: "56c87e22fd852b1159637be7",
			className: "food"
		}
	},
	newDoc: function(){
		api.getRandomDoc(function(err,result){
			if(err) return console.log(err);
			this.setState({
				docId: result.data._id,
				docText: result.data.docText
			});
		}.bind(this))
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
	componentDidMount: function(){
		this.newDoc();
		// api.getClassName(this.props.classId, function(err, className){
		// 	if(err) return console.log(err);
		// 	this.setState({
		// 		className: className
		// 	})
		// }.bind(this));
	},
	render: function(){
		return (<div className="main container">
					<ClassName name={this.props.className} />
					<Document docText={ this.state.docText } />
					<div className="buttons">
						<button className="yesnobutton no" onClick={this.handleNo}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
						<button className="yesnobutton yes" onClick={this.handleYes}><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
					</div>
				</div>);
	}
});

module.exports = DocumentBox;
