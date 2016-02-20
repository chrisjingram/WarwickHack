var express = require("express");
var router = express.Router();

var classDB = require("../../db/classDB.js");

router.post('/', function(req, res, next){
	var name = req.body.name;
	console.log(req.body.name);
	classDB.insert(name, function(err, result){
		console.log("returned classDB.insert");
		if (err) return res.sendStatus(500).json({error: err});
		return res.json({success: true});
	});
});



module.exports = router;