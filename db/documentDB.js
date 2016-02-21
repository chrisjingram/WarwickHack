var mongoose = require("mongoose");
var Document = require("./models/Document.js");

module.exports.insert = function(className, docText, callback){
  console.log(docText);
  console.log(className);
	var obj = { classified: false, className: className, docText: docText, yeses: [], nos: []};

	Document.collection.ensureIndex({
		randomNumber: 1
	},
	function(error, res) {
	    if(error){
	        return console.error('failed ensureIndex with error', error);
	    }
	    console.log('ensureIndex succeeded with response', res);
	});
  console.log(obj.docText);

	Document.create(obj, function(err, result){
		if(err) return callback("mongo error: " + err);
		return callback(null,true);
	});
};

module.exports.random = function(className, callback){

	var random = Math.random();
	console.log(random);

	var query = {
		randomNumber: {$gte: random}
	};

	if(className) query.name = className;

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
  documentId = mongoose.Types.ObjectId(documentId);

	// add 1 to yes
  Document.findOneAndUpdate(
      {_id: documentId},
      {$addToSet: {"yeses": userId}},
      {returnNewDocument: true},
      function(err, doc){
        if(!err) callback({success:true});
        else callback({success:false});
        /*
        if(err || !doc) callback(err);
        else if(percentYes(doc) > 0.8 && enoughClassifications(doc) && !doc.classified){
          console.log("new points");
          callback(false);
        }
        */
      }
  );
};

module.exports.addNo = function(documentId, userId, callback){
  documentId = mongoose.Types.ObjectId(documentId);

  Document.findOneAndUpdate(
      {_id: documentId},
      {$addToSet: {"nos": userId}},
      {returnNewDocument: true},
      function(err, doc){
        if(!err) {
          callback({success: true});
        } else {
          callback({success:false});
        }
      }
  );
};