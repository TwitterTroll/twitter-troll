var express = require("express");
var router = express.Router();
var path = require("path");



router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
}); 

router.get("/signin", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/sign.html"));
});

router.get("/for", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/troll1.html"));
});

router.get("/against", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/troll2.html"));
});

module.exports = router;