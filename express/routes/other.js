/* Import express module and create a new router object. */

const express = require("express");
const router = express.Router();

/* Configure the new router object. The get method registers a handler for GET requests. */
router.get("/", (req, res, next) => {
  res.render("index", {title: "New Router"});
});

/* Have the module export object point to the router object: */
module.exports = router;
