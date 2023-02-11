const mongoose = require("mongoose");

const testCaseSchema = new mongoose.Schema({
  description    : {type: String},
  preConditions  : {type: [String]},
  postConditions : {type: [String]},
  steps          : {type: [String]},
});

module.exports = mongoose.model("TestCase", testCaseSchema);
