// This controller defines methods to return various states|configurations of
// the test automation dashboard prototype.

exports.start = (req, res) => {
  // Set up mongo interface to mongo database:
  const {MongoClient} = require("mongodb");
  const connectionString = "mongodb://localhost:27017"
  const client = new MongoClient(url);

  
  res.send("Will soon return the start configuration of tadpole.");




  }

