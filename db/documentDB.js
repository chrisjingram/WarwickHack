var mongoose = require("mongoose");
var Document = require("./models/Document.js");

module.exports.insert = function(classId, docText, callback){
	var obj = { classified: false, classId: classId, docText: docText, yeses: [], nos: []};

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
};

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
		if(doc == null){
			query.randomNumber = {$lte: random}
			Document.findOne(query, function(err2, doc2){
				if(err2) return callback(err2);
				return callback(null,doc2);
			})
		}else{
			return callback(null, doc);
		}

	});

};

var percentYes = function(doc){
  return doc.yeses/(doc.yeses+doc.nos);
};
var enoughClassifications = function(doc){
  return (doc.yeses + doc.nos) >= 10;
};

module.exports.addYes = function(documentId, userId, callback){

	// add 1 to yes
  Document.findOneAndUpdate(
      {_id: documentId},
      {"yeses": {$addToSet: userId}},
      {returnNewDocument: true},
      callback
  );
};

module.exports.addNo = function(documentId, userId, callback){

  Document.findOneAndUpdate(
      {_id: documentId},
      {"nos": {$addToSet: userId}},
      {returnNewDocument: true},
      function(err, doc){
        if(err) console.log(err);
        if(percentYes(doc) > 0.8 && enoughClassifications(doc)){
          console.log("new points");
        }
      }
  );
};