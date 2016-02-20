var mongoose = require("mongoose");

module.exports = mongoose.model(
  "Class",
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
  })
);

