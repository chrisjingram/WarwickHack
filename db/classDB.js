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

module.exports.findAll = function(callback){
	Class.find(function(err, classes){
		if(err) return callback("mongo error: " + err);
		return callback(null, classes);
	})
}

module.exports.getClassName = function(classId, callback){
	var obj = {}
	if(classId){
		obj = {_id: classId};
	}
	Class.findOne(obj, function(err, className){
		if(err) return callback("mongo error: " + err);
		console.log(className.name);
		return callback(null, className.name);
	})
}

module.exports.getFirstClassId = function(callback){
	Class.findOne(function(err, data){
		if(err) return callback("mongo error:" + err);
		return callback(null, data)
	})
}