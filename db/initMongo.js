var mongoose = require("mongoose");
var config = require("../config/mongoConfig.js");

module.exports = function(){
  var mdb = mongoose.connection;
  mdb.on("error", function(err){
    console.log(
        "ERR: Mongodb connection error at " + config.mongo.url,
        err
    );
  });
  var dlog = true;
  var connecting = false;
  mdb.on("disconnected", function(){
    if(dlog){
      dlog = false;
      connect();
      setTimeout(function(){dlog=true}, 2000);
      console.warn("MDB Disconnect at " + config.mongo.url);
    }
  });
  mdb.on("connected", function(){
    console.log("MDB Connect at " + config.mongo.url);
  });
  connect();
  var clog = true;
  function connect(){
    if(!connecting){
      connecting = true;
      mongoose.connect(config.mongo.url, config.mongo.options, function(err){
        //clog = false;
        //setTimeout(function(){clog=true}, 2000);
        if(err) console.log(err);
        connecting = false;
      });
    }
  }
};

