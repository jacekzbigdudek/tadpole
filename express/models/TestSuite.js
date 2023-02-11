const mongoose = require("mongoose");

const testSuiteSchema = new mongoose.Schema({
  name      : {type: String}
  version   : {type: String}
  keywords  : {type: [String]}
  testCases : {type: [Schema.Types.ObjectId], ref: "TestCase"}
});

module.exports = mongoose.model("TestCase", testSuiteSchema);
