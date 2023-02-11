const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  url      : {type: String},
  name     : {type: String},
  version  : {type: String},
  keywords : {type: [String]}
});

module.exports = mongoose.model("Application", applicationSchema);
