var mongoose = require("mongoose");
var Class = require("./models/Class.js");

module.exports.insert = function(name, callback){
	var classObj = {name: name};
	Class.create(classObj, function(err, result){
		if(err) return callback("mongo error: " + err);
		return callback(null,true);
	});
}

module.exports.find = function(name, callback){
	var classObj = {name: name};
	Class.find(classObj, function(err, classes){
		if(err) return callback("mongo error: " + err);
		return callback(null, classes);
	})
}
