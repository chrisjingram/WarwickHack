var mongoose = require("mongoose");
var Document = require("./models/Document.js");

module.exports.insert = function(classId, docText, callback){
	var obj = { classId: classId, docText: docText };

	Document.collection.ensureIndex({
		randomNumber: 1
	},
	function(error, res) {
	    if(error){
	        return console.error('failed ensureIndex with error', error);
	    }
	    console.log('ensureIndex succeeded with response', res);
	});

	Document.create(obj, function(err, result){
		if(err) return callback("mongo error: " + err);
		return callback(null,true);
	});
}

module.exports.random = function(classId, callback){

	var random = Math.random()
	console.log(random);

	var query = {
		randomNumber: {$gte: random}
	};

	if(classId) query.classId = classId;

	Document.findOne(query, function(err, doc){
		console.log(doc);
		if(err) return callback(err);
		return callback(null, doc);
	});

}

module.exports.addYes = function(classId, documentId, callback){

	// add 1 to yes

}