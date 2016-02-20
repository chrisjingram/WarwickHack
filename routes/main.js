var express = require("express");
var router = express.Router();
var path = require("path");

router.get('/', function(req, res, next){
	res.send("Hello World");
});

router.get('/react', function(req, res, next){
	// res.send('hello');
	res.sendFile(path.join(__dirname+'/../views/public/index.html'));
});

module.exports = router;