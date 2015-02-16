//
// var Twitter = require('twitter');
//
// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });
//
// client.stream('statuses/filter', {track: 'coding house,codinghouse'}, function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });
//
//   stream.on('error', function(error) {
//     throw error;
//   });
// });

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  //Get the documents collection

    var collection = db.collection('documents');
    // Insert some documents
    collection.insert(
      {b : 1, c: 2}
    , function(err, result) {
      assert.equal(err, null);
      db.close();
    });

});
