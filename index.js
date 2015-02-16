//
var Twitter = require('twitter');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var url = process.env.MONGO_URL;

client.stream('statuses/filter', {track: 'codinghouse'}, function(stream) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    //Get the documents collection
    var collection = db.collection('documents');
    stream.on('data', function(tweet){
      console.log(tweet.text);
      collection.insert(tweet, function(err, result) {
        assert.equal(err, null);

      });


    // Insert some documents
});

stream.on('error', function(error) {
    throw error;
  });
 });
});
