var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun(process.env.MG_KEY);

var tweets=db.documents.find()
'$tweets'

mg.sendText('emilemuny007@gmail.com',
              'emilemuny007@gmail.com',
              'Tweets streams from the mongod',
              'This is the body'


              //'This is the message body',
              function(err) {
                if(err) console.log('oh noes: ' + err);
                else    console.log('Success');
              });
