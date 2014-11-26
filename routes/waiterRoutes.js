/**
 * Created by Turbut Alin on 17.11.2014.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var WaiterController = require('../controllers/waiterController');

module.exports = function(app, responseFunction){
    app.get('/waiter/all', function(req,res){
        var allWaiters = WaiterController.findAll(function(err,data){
            responseFunction(res, err, data);
        });
    });
};