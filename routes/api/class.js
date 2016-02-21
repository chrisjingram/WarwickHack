var express = require("express");
var router = express.Router();

var classDB = require("../../db/classDB.js");

router.post('/', function(req, res, next){
	var name = req.body.name;
	classDB.insert(name, function(err, result){
		if (err) return res.status(500).json({error: err});
		return res.status(200).json({success: true});
	});
});

router.get('/first', function(req, res, next){
	classDB.getFirstClassId(function(err, className){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: className});
	})
})

router.get('/name/:name', function(req, res, next){
	var name = req.params.name;
	classDB.find(name, function(err, classes){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: classes});
	});
});

router.get('/id/:classid', function(req, res, next){
	var name = req.params.classid;
	classDB.getClassName(name, function(err, className){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: className});
	});
});



module.exports = router;