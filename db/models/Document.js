var mongoose = require("mongoose");

module.exports = mongoose.model(
  "Document",
  new mongoose.Schema({
    _id: {
      required: true,
      type: String
    },
    docText: {
      type: String,
      required: true
    },
    classId: {
      type: String,
      required: true
    }
  })
);
