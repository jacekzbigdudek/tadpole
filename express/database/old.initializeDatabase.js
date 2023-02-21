// Using the asynchronous module:
const async = require("async");

// Importing our models:
const Application = require("./models/Application");
// const Environment = require("./models/Environment.js");
// const Status = require("./models/Status.js");
// const TestCase = require("./models/TestCase.js");
// const TestSuite = require("./models/TestSuite.js");
// const TestRun = require("./models/TestRun.js");

// Initialize mongoose module:
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Connect to database (and create database if not created yet?).
// The .connect function is asynchronous, so here it's wrapped into an async function definition:
async function main () { await mongoose.connect("mongodb://localhost:27017/tadpole"); }
main().catch(err => console.log(err));

const applications = [];
const environments = [];
const statuses = [];
const testCases = [];
const testSuites = [];
const testRuns = [];

function createApplication(url, name, version, keywords, cb) {
  const application = new Application({
    url: url,
    name: name,
    version: version,
    keywords: keywords 
  });
  application.save(function (err) {
    if (err) {
      cb(err, null);
    }
    else {
      applications.push(application);
      cb(null, application);
    }
  });
}

// This function adds hard-coded application instances to the database:
function createApplications(cb) {
  async.series([
    function (callback) {createApplication(
      "https://arstechnica.com",
      "Ars Technica",
      "1.0.0",
      ["art", "technology", "website", "computing", "enthusiast"],
      callback
    )},
    function(callback) {createApplication(
      "https://theguardian.com",
      "The Guardian",
      "1.0.0",
      ["news", "international", "events", "reporting"],
      callback
    )},
    function (callback) {createApplication(
      "https://statcan.gc.ca/en/start",
      "Statistics Canada - English",
      "1.0.0",
      ["statistics", "Canada", "government", "agency", "census", "survey", "economy"],
      callback
    )}
  ], cb);
}

// Create all the different types of data:
async.series([
  createApplications
],
function(err, results) {
  if (err) { 
    console.log(err); 
  }
  else {
    console.log("Applications that were registered: " + applications);
  }
  mongoose.connection.close();
});


