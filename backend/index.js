/* We'll be importing mongoose models here, and then using them in the route handlers. */

const express = require("express");
const cors = require("cors");
const app = express();

const applications = require("./data/applications");
const environments = require("./data/environments");
const testCases = require("./data/testCases");

/* Manages cross-origin resource sharing. */
app.use(cors());

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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

