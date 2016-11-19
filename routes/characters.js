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
    if (err) {
      return console.error(err);
    }

    var charJson = [];
    for (var i = 0; i < results.data.length; i++) {
      charJson.push(results.data[i].thumbnail);
    }

    res.render('characters', { charJson: charJson.join(', ') });

  });
});

module.exports = router;
