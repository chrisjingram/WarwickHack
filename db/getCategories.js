/**
 *
 * Created by matt on 20/02/2016.
 */

var Class = require("./models/Class.js");

module.exports = function(cb){
  Class.find({}, function(err, categories){
    if(err) cb(err);
    categories = categories.map(function(doc){
      return doc.name;
    });
    cb(false, categories);
  });
};


