var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res) {
      res.json('Json works');
});

module.exports = router;
