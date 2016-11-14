var express = require('express');
var request = require('request'); // i put this in for a simple request.
var md5 = require('md5');
//this app will let us handle any incoming requests
var app = express();

app.get("/", function (req, res) {
  res.send("hohoho");
});

app.listen(8080, function () {
  console.log("express server funning on port 8080");
});

var apikey = '',
    privateKey = '',
    ts = new Date().getTime(),
    hash = md5(ts + privateKey + apikey), //md5
    url = 'http://gateway.marvel.com/v1/public/comics?ts=' + ts + '&apikey=' + apikey + '&' + 'hash=' + hash;

request({url: url}, function (error, response, body) {
   // Do more stuff with 'body' here
   console.log('made request');
   console.log(url);
});
