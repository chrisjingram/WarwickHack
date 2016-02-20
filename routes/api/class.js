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

router.get('/:name', function(req, res, next){
	var name = req.params.name;
	classDB.find(name, function(err, classes){
		if(err) return res.status(500).json({error: err});
		return res.status(200).json({success: true, data: classes});
	});
});

module.exports = router;