var categories = require("./categories.js");
var fuzzy = require("fuzzy");

module.exports = function(str){
  return fuzzy
    .filter(str, categories)
    .sort(function(a, b){
        return b.score - a.score;
    })
    .map(function(el){
        return el.original;
    });
};

//test
//console.log(module.exports("food"));