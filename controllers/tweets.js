// // Import the model (burger.js) to use its database functions.
// var tweet = require("../models/tweet.js");

// // module.exports = {
// //   function tweet() {
//  var twitterAPI =  module.exports = function() {
//     var fs = require("fs");
//     var Twitter = require('twitter');
//     var keys = require("../config/keys.js");
//     var client = new Twitter(keys);
//   //input for twitter name
//   //var name = process.argv[3];

//   var tweet = require(“../models/tweet.js”);
//    var fs = require(“fs”);
//    var Twitter = require(‘twitter’);
//    var keys = require(“../config/keys.js”);
//    var client = new Twitter(keys);
//    module.exports = function tweetIt() {
 
//  var params = {screen_name: “pattersonluri”, count:21};
 
//    client.get(‘statuses/user_timeline’, params, function(error, tweets, data) {
     
       
//        for (var i=1; i<tweets.length; i++){ 
//            tweet = JSON.stringify(tweets[i].text);
         
//           }
           
//  });
 
// }