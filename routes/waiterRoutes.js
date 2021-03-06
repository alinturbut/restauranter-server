/**
 * Created by Turbut Alin on 17.11.2014.
 */
var mongoose = require('mongoose');
var WaiterController = require('../services/waiterService.js');

module.exports = function(app, responseFunction){
    app.get('/waiter/all', function(req,res){
        WaiterController.findAll(function(err,data){
            responseFunction(res, err, data);
        });
    });

    app.get('/', function(req,res){
       res.json('Here\'s some text :-)');
    });
};