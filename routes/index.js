var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var WaiterController = require('../controllers/waiterController');

/* GET home page. */
router.get('/', function(req, res) {
      res.json(WaiterController.findAll(function(err,data){
            if(err){
            }
      }));
});

module.exports = router;
