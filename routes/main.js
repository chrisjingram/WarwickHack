var express = require("express");
var router = express.Router();
var path = require("path");

router.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname+'/../views/public/index.html'));
});

router.get('/stats', function(req, res, next){
	res.sendFile(path.join(__dirname+'/../views/public/stats.html'));
});

module.exports = router;