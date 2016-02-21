var express = require("express");
var router = express.Router();

var documentDB = require("../../db/documentDB.js");

router.post('/', function(req, res, next){
	var classId = req.body.classId;
	var docText = req.body.docText;

	documentDB.insert(classId, docText, function(err, result){
		console.log("document.insert returned");
		if(err){
			console.log(err);
			return res.status(500).json({error: err});
		}
		return res.status(200).json({success: true});
	});
});

router.get('/random/:classId?', function(req, res, next){

	var classId = req.params.classId || null
	
	documentDB.random(classId, function(err, doc){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: doc});
	})

})

router.get('/all/:className?', function(req, res, next){
	var className = req.params.className || null
	documentDB.all(className, function(err, documents){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: documents});
	})
});

module.exports = router;