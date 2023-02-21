// Simple module to initialize the database for tadpole and populate it with
// some sample data.
const { MongoClient } = require("mongodb");

async function doit() {
  const url = "mongodb://localhost:27017";
  const client = new MongoClient(url);

  const database = client.db("tadpole");
  const testCases = database.collection("testCases");

  const testCase = {
    description: "Sample test case",
    preConditions: [
      "pre-condition 1",
      "pre-condition 2"
    ],
    postConditions: [
      "post-condition 1",
      "post-condition 2"
    ],
    steps: [
      "step 1",
      "step 2",
      "step 3"
    ]
  };

  try {
    await client.connect(url);
    console.log("Connected successfully to server.");
    const res = await testCases.insertOne(testCase);
    console.log(`Document with id ${res.insertedId} was inserted.`);
  }
  catch(err) {
    console.log(`Operation unsuccessful. Nothing inserted. This was the error: ${err}`);
  }
}

doit();
