var should = require("should");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/warwickhacktest", {}, function(err){
	if(err) console.log(err);
});

require("./testClassDB.js")(mongoose)