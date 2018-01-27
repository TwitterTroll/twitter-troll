var express = require("express");
var router = express.Router();
var tweet = require("../models/tweet.js");

 var twitterAPI = require("./tweets.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
//twitterAPI();
// console.log(twitterAPI());

//console.log(JSON.stringify(twitterAPI()(tweets[i].text)));
//console.log(twitterAPI());
  // twitterAPI.all(function(data) {
  //   var hbsObject = {
  //     tweets: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
  // twitterAPI(function(data) {
  //   var fs = require("fs");
  //   var Twitter = require('twitter');
  //   var keys = require("../config/keys.js");
  //   var client = new Twitter(keys);
  // //input for twitter name
  // //var name = process.argv[3];

  // //twitter parameters
  //   // var params = {screen_name: name, count:21};
  // var params = {screen_name: "pattersonluri", count:21};
  //   //twitter API call
  //   client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //    if (!error) { 
  //    //loop through tweets starting at index 1    
  //    for (var i=1; i<tweets.length; i++){ 
  //     var messages = [];
  //     // var messages = [];
  //     //JSON.stringify(tweets[i].text);
  //   // console.log(JSON.stringify(tweets[i].user.name));
  //   // console.log(JSON.stringify(tweets[i].user.screen_name));
  //   // console.log(JSON.stringify(tweets[i].text));
  //   // // console.log(messages);
  //   // console.log(JSON.stringify(tweets[i].created_at, null, 2));
  //   messages.push(JSON.stringify(tweets[i].user.name)+JSON.stringify(tweets[i].user.screen_name)+JSON.stringify(tweets[i].text));
  //   console.log(messages);
  //       };
  //     }
  //   });
  // });
  
}); 


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




