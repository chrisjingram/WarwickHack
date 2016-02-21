var jquery = require("jquery");

module.exports.getRandomDoc = function(classId, callback){
	// 56c87e22fd852b1159637be7 is food
	console.log("className", classId);
	jquery.get('/document/random/' + classId, function(result){
		console.log(result);
		if(result.error){
			return callback(result.error);
		}else{
			return callback(null, result);
		}
	});
}

module.exports.updateYes = function(docId, userId, callback){
	return callback(null, true);
}

module.exports.updateNo = function(docId, userId, callback){
	return callback(null, true);
}

module.exports.getClassName = function(classId, callback){
	var path = '/class/id/';
	if(classId){
		path = path + classId;
	}
	jquery.get(path, function(result){
		if(result.error){
			return callback(result.error);
		}else{
			return callback(null, result.data);
		}
	});
}

module.exports.getFirstClassId = function(callback){
	jquery.get('/class/first', function(result){
		if(result.error){
			return callback(result.error);
		}else{
			return callback(null, result.data);
		}
	})
}

module.exports.getClasses = function(callback){
	jquery.get('/class/all', function(result){
		if(result.error){
			return callback(result.error);
		}else{
			return callback(null, result.data);
		}
	})
}

module.exports.getDocumentsForClass = function(className, callback){
	jquery.get('/document/all/' + className, function(result){
		if(result.error){
			return callback(result.error);
		}else{
			return callback(null, result.data);
		}
	})
}


