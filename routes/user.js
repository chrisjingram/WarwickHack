var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

var passport = require('passport');

require("../config/passport.js")(passport);

router.post("/signup", function(req,res,next){

  // sign up using passport
  passport.authenticate('local-signup',{session: false}, function(err,user,info){
    if(err){
      return next(err);
    }else{
      if(!user){
        return res.status(500).send({success: false, message: 'signupFailed'});
      }else{
        return res.send({success: true, user: user});
      }
    }
  })(req,res,next);
});

router.post("/authenticate", function(req,res,next){

  // check email and password with passport

  passport.authenticate('local-login',{session: false}, function(err, user, info){
    if(err){
      console.log(err);
      return next(err);
    }else{
      if(!user){
        return res.status(500).send({success: false, message: 'loginFailed'});
      }else{
        return res.send({success: true, user: user});
      }
    }
  })(req,res,next);

});

module.exports = router;
