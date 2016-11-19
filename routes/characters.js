var express = require('express');
var router = express.Router();

var api = require('marvel-api');


var marvel = api.createClient({
  publicKey: 'c7451ee22269b93a6092c0bd22858506',
  privateKey: 'b9951c3859c08629180ab9070c9967e9e43e828a'
});


/* GET home page. */
router.get('/', function(req, res, next) {
  marvel.characters.findAll(function(err, results) {
    if (err) {
      return console.error(err);
    }

    var charJson = [];
    for (var i = 0; i < results.data.length; i++) {
      charJson.push(results.data[i].name);
    }
// return console.log(results.data[0].name);
    res.render('characters', { charJson: charJson.join(', ') });

  });
});

module.exports = router;
