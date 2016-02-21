var express = require("express");
var router = express.Router();

var documentDB = require("../../db/documentDB.js");

router.post('/', function(req, res, next){
	var className = req.body.className;
	var docText = req.body.docText;
  console.log(req.body);

	documentDB.insert(className, docText, function(err, result){
		console.log("document.insert returned");
		if(err){
			console.log(err);
			return res.status(500).json({error: err});
		}
		return res.status(200).json({success: true});
	});
});

router.get('/random/:className?', function(req, res, next){

	var className = req.params.className || null

	console.log("random api call", className);
	
	documentDB.random(className, function(err, doc){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: doc});
	})

});

router.post('/yes', function(req, res){
  documentDB.addYes(req.body.documentId, req.body.userId, function(err){
    if(err) return res.status(500).json({success: false});
    return res.status(200).json({success: true});
  });
});
router.post('/no', function(req, res){
  documentDB.addNo(req.body.documentId, req.body.userId, function(err){
    if(err) return res.status(500).json({success: false});
    return res.status(200).json({success: true});
  });
});

router.get('/all/:className?', function(req, res, next){
	var className = req.params.className || null
	documentDB.all(className, function(err, documents){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: documents});
	})
});

module.exports = router;