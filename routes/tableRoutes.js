/**
 * Created by Alin on 5/22/2015.
 */
var TableService = require('../services/tableService.js');

module.exports = function(app, responseFunction){
   app.get('/table/all', function(req, res){
       TableService.findAll(function(err,data){
           responseFunction(res, err, data);
       })
   });

    app.post('/table/save', function(req, res){
        var tableNumber = req.body.tableNumber;
        var seats = req.body.seats;
        TableService.save(tableNumber, seats, function(err, data){
            responseFunction(res, err, data);
        })
    })
};