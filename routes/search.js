var express = require("express");
var router = express.Router();
var path = require("path");

var getSuggestions = require("../db/getSuggestions");

router.get('/categories', function(req, res, next){
	// res.send('hello');
  res.json(getSuggestions(req.get("query")));
});

module.exports = router;