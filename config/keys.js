var Secrets = require('../secrets.js');

console.log('this is loaded');

 
var twitterKeys = {
  consumer_key: Secrets.consumerKey,
  consumer_secret: Secrets.consumerSecret,
  access_token_key: Secrets.accessTokenKey,
  access_token_secret: Secrets.accessTokenSecret
};

module.exports = twitterKeys;
