var express = require('express');
var router = express.Router();

var api = require('marvel-api');
var dotenv = require('dotenv');
dotenv.config();


var marvel = api.createClient({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
});


router.get('/', function(req, res, next) {
  marvel.comics.findAll(function (err, results) {
    if (err) {
      return console.error(err);
    }

  var comics = [];
  for (var i = 0; i < results.data.length; i++) {
    comics.push(results.data[i].title);
  }
  res.render('comics', { comics: comics });

  });
});


module.exports = router;
