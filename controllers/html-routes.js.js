var express = require("express");
var router = express.Router();
var path = require("path");



router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
}); 

router.get("/signin", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signin.html"));
});

router.get("/trollfor", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/troll1.html"));
});

router.get("/trollagainst", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/troll2.html"));
});

module.exports = router;