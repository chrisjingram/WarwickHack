var should = require("should");
// var mongoose = require("mongoose");

var async = require("async");

module.exports = function(mongoose){

	describe('classDB', function(){

		beforeEach(function(done){
			mongoose.connection.db.listCollections().toArray(function(err, names) {
				if (err) {
					console.log(err);
				}else{
					names.forEach(function(e,i,a) {
						mongoose.connection.db.dropCollection(e.name);
					});
					done()
				}
			});
		});

		it('insert class', function(done){
			var classDB = require('../db/classDB.js');
			classDB.insert("testclass", function(err, result){
				should(err).be.not.ok();
				result.should.be.exactly(true);
				done()
			})
		});

		it('find classes', function(done){
			var classDB = require('../db/classDB.js');
			async.series([
				classDB.insert("testclass", function(err, result){
					should(err).be.not.ok();
					result.should.be.exactly(true);
				}),
				classDB.find("testclass", function(err, classes){
					should(err).be.not.ok();
					classes.count.should.be.exactly(1);
				})
				],done);
		});
	})

}