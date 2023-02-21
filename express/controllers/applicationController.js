// We'll be using the model to mediate access to the database for application related data.
const Application = require("../models/Application");

// Each export here represents a specific handler for a url (or url pattern):
exports.applications = (req, res) => {
  res.send("NOT IMPLEMENTED YET: applications list");
}


