var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var character = require("../models/character.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  character.selectAll(function(data) {
    var hbsObject = {
      characters: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/addcharacter", function(req, res) {
  character.insertOne([
    "name", "dead"
  ], [
    req.body.name, req.body.dead
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/character/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  character.updateOne({
    dead: req.body.dead
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
