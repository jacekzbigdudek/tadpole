const mongoose = require("mongoose");

const testRunSchema = new mongoose.Schema({
  application : {type: Schema.Types.ObjectId, ref: "Application"},
  environment : {type: Schema.Types.ObjectId, ref: "Environment"},
  testSuite   : {type: Schema.Types.ObjectId, ref: "TestSuite"},
  status      : {type: Schema.Types.ObjectId, ref: "Status"}
});

module.exports = mongoose.model("TestRun", testRunSchema);
