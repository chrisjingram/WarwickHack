var fuzzy = require("fuzzy");
var categories;
require("./getCategories.js")(function(err, cats){
  if(err) console.log("failed to load categories");
  categories = cats;
});

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