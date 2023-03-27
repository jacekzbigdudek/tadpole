const express = require("express");
const cors = require("cors");
const app = express();

/* 
We'll be importing mongoose models here instead of these JS modules,
and then using them in the corresponding route handlers. 
*/
const applications = require("./data/applications");
const environments = require("./data/environments");
const testCases = require("./data/testCases");

/* 
Register middleware for handling requests for static content
and for cross-origin resource sharing. 
*/
app.use(cors());
app.use(express.static("./build"));

/* Register route handlers for collections and individual items. */
/* Isn't this one conflicting with our static main page though? */
app.get('/', (request, response) => {
  response.send("<h1>Specify collection to view in the URL.</h1>");
});

app.get("/applications", (request, response) => {
  response.json(applications);
});

app.get("/applications/:uuid", (request, response) => {
  const uuid = Number(request.params.id);
  const application = applications.find(a => a.uuid === uuid);
  response.json(application);
});

app.get("/environments", (request, response) => {
  response.json(environments);
});

app.get("/environments/:uuid", (request, response) => {
  const uuid = Number(request.params.uuid);
  const environment = environments.find(e => e.uuid === uuid);
  response.json(environment);
});

app.get("/testCases", (request, response) => {
  response.json(testCases);
});

app.get("/testCases/:uuid", (request, response) => {
  const uuid = Number(request.params.uuid);
  const testCase = testCases.find(t => t.uuid === uuid);
  response.json(testCase);
});

/* 
Activate web server after setup.
We should move the port specification out to a configuration file.
*/
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

