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
			className: null
		}
	},
	getDefaultProps: function(){
		return {
			classId: "56c87e22fd852b1159637be7"
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
	handleSwipe: function(ev){
		console.log(ev.type);
	},
	componentDidMount: function(){
		this.newDoc();
		api.getClassName(this.props.classId, function(err, className){
			if(err) return console.log(err);
			this.setState({
				className: className
			})
		}.bind(this));
	},
	render: function(){
		return (<div className="main container" onSwipe={this.handleSwipe}>
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
