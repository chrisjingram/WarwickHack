var mongoose = require("mongoose");

module.exports = mongoose.model(
  "Document",
  new mongoose.Schema({
    docText: {
      type: String,
      required: true
    },
    classId: {
      type: String,
      required: true
    },
    randomNumber: {
      type: Number,
      default: function() {
        return Math.random()
      },
      index: true
    },
    yes: {
      type: Number,
      default: 0
    },
    no: {
      type: Number,
      default: 0
    },
    yeses: {
      type: [String]
    },
    nos: {
      type: [String]
    },
    classified: {
      type: Boolean,
      default: false
    }
  })
);
