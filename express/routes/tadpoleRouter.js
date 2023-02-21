const express = require("express");
const tadpole = require("../controllers/tadpoleController");

// Creating a router object:
const router = express.Router();

// For now we're just responding to a single route and request for the homepage.
// Note: Be aware that the route specified here will be prefixed by whatever 
// path we set when register this router with the main application object.
// So we can keep this as root, and register the router under "/homepage".
router.get("/tadpole", tadpole.start);

module.exports = router;

