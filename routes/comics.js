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
  marvel.comics.findAll()
  .then(console.log)
  .fail(console.error)
  .done();

  res.render('comics', { charJson: res });

  });


module.exports = router;
