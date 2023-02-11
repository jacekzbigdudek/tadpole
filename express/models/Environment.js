const mongoose = require("mongoose");

const environmentSchema = new mongoose.Schema({
  browser: {type: String, enum: ["Firefox", "Chrome", "Edge", "Safari"]}
  // Anything else?
  // Browser version?
  // Credentials information?
});

module.exports = mongoose.model("Environment", environmentSchema);
