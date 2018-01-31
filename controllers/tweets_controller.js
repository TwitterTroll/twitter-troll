var express = require("express");
var router = express.Router();
var tweet = require("../models/tweet.js");

 var twitterAPI = require("./tweets.js");
// Create all our routes and set up logic within those routes where required.

router.get("/api/twitter", function(req, res) {
   var fs = require("fs");
    var Twitter = require('twitter');
    var keys = require("../config/keys.js");
    var client = new Twitter(keys);
  var params = {screen_name: "pattersonluri", count:21};
  // var params = {result_type: "popular"};
    //twitter API call
    
    client.get('statuses/user_timeline', params, function(error, tweets, data) {
         // var message = [];
        
        for (var i=1; i<tweets.length; i++){ 
            tweet = JSON.stringify(tweets[i].text);
            //console.log(tweet);
           }
           res.json(tweet);
         })
        });


Add Comment
// var twitterAPI = require("../models/tweet.js");
// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   twitterAPI.all(function(data) {
//     var hbsObject = {
//       tweets: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
//   // console.log(twitterAPI());
// });


router.post("/", function(req, res) {
  tweets.create([
    "screen_name", "tweet"
  ], [
    req.body.screen_name, req.body.tweet
  ], function() {
    res.redirect("/");
  });
});

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: true
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

// router.delete("/delete/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete("condition", function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;




