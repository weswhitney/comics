var express = require('express');
var router = express.Router();

var api = require('marvel-api');
var dotenv = require('dotenv');
dotenv.config();


var marvel = api.createClient({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
});


/* GET home page. */
router.get('/', function(req, res, next) {
  marvel.characters.findAll(function(err, results) {
    console.log(results);
    if (err) {
      return console.error(err);
    }

    var characters = [];
    for (var i = 0; i < results.data.length; i++) {
      characters.push(results.data[i].thumbnail.path + "." + results.data[i].thumbnail.extension);
    }
// pass information to your template by sending along an extra object with your render method.
    res.render('characters', { characters: characters });

  });
});

module.exports = router;
