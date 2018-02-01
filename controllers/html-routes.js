var express = require("express");
var router = express.Router();
var path = require("path");
var tweets = require("../models/tweet.js");


router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
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

router.get("/api/twitter", function(req, res) {
  console.log('test');
   var fs = require("fs");
    var Twitter = require('twitter');
    var keys = require("../config/keys.js");
    var client = new Twitter(keys);
    client.get('search/tweets', {q: 'NFL'}, function(error, tweets, response) {
         var message = [];
        // console.log('search results', tweets);
        var tweetResults = tweets.statuses;
        for (var i=0; i<tweetResults.length; i++){ 

            tweet = JSON.stringify(tweetResults[i].text);

            message.push(tweet);
             console.log(message);
           }
           res.json(message);
         })
       });
module.exports = router;