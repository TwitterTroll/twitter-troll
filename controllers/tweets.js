// Import the model (burger.js) to use its database functions.
var tweet = require("../models/tweet.js");

// module.exports = {
//   function tweet() {
 var twitterAPI =  module.exports = function() {
    var fs = require("fs");
    var Twitter = require('twitter');
    var keys = require("../config/keys.js");
    var client = new Twitter(keys);
  //input for twitter name
  //var name = process.argv[3];

  //twitter parameters
    //var params = {screen_name: name, count:21};
  //var params = {screen_name: "pattersonluri", count:21};
  var params = {result_type: "popular"};
    //twitter API call
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) { 
     //loop through tweets starting at index 1    
     for (var i=1; i<tweets.length; i++){ 
      console.log(JSON.stringify(tweets[i].text));
//   var stream = client.stream('statuses/filter', {track: 'NFL'});
// stream.on('data', function(event) {
//   console.log(event.text);
// });
 
// stream.on('error', function(error) {
//   throw error;
//       });
   }
}
});
  
} 