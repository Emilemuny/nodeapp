var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun(process.env.MG_KEY);



// mg.sendText('emilemuny007@gmail.com',
//               'emilemuny007@gmail.com',
//               'Tweets streams from the mongod',
//               'This is the body'
//
//
//               //'This is the message body',
//               function(err) {
//                 if(err) console.log('oh noes: ' + err);
//                 else    console.log('Success');
//               });
var url = process.env.MONGO_URL;
var tweetText = function(tweet) {
  return '@' + tweet.user.screen_name + ': ' + tweet.text;
}
var tweetUrl = function(tweet) {
  //return '@' + tweet.user.screen_name + ': ' + tweet.text;
   return "https://twitter.com/" + tweet.user.screen_name + "/status" + tweet.id_str
};
var handleTweets = function(tweets) {
  var emailBody = '' ;
  var tweetsTexts = tweets.map(function(tweet) {
  //  return '@' + tweet.user.screen_name + ': ' + 'id'+ tweet.user.id + tweet.text;

   return tweetText(tweet) + '|' + tweetUrl(tweet);
 }).join("\n");

    //return tweet.text;

  //});
  console.log(tweetsTexts);

};

MongoClient.connect(url, function(err, db) {
  assert.equal(null,err);
  console.log("Connected correctly to server");

  var collection = db.collection('documents');
  collection.find({}).toArray(function(err, documents) {
     assert.equal(err, null);
     console.log(documents.length);
     handleTweets(documents);
     db.close();
  });
});
