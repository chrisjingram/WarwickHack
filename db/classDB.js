var mongoose = require("mongoose");
var Class = require("./models/Class.js");

module.exports.insert = function(name, callback){
	var classObj = {name: name};
	console.log("classDB.insert");
	Class.create(classObj, function(err, result){
		console.log("returned Class.create");
		if(err) return callback("Mongo Error: " + err);
		return callback(null,true);
	});
}
