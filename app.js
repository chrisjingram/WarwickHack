var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

require("./db/initMongo.js")(); // init db

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "10000000"}));

// routes
var mainRoutes = require("./routes/main.js");
var searchRoutes = require("./routes/search.js");
var classAPIRoutes = require("./routes/api/class.js");

app.use("/public", express.static(path.join(__dirname, '/views/public')));
app.use("/search", searchRoutes);
app.use("/", mainRoutes);
app.use("/class", classAPIRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

app.listen(5678, function(){
  console.log("Listening on port 5678");
});

module.exports = app;
