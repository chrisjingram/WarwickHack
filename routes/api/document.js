var express = require("express");
var router = express.Router();

var documentDB = require("../../db/documentDB.js");

router.post('/', function(req, res, next){
	var classId = req.body.classId;
	var docText = req.body.docText;
  console.log(req.body);

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

module.exports = router;