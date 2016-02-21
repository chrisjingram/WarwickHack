var jquery = require("jquery");

module.exports.getRandomDoc = function(callback){
	// 56c87e22fd852b1159637be7 is food
	jquery.get('/document/random/56c87e22fd852b1159637be7', function(result){
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