/**
 * Created by Alin on 5/22/2015.
 */
var Table = require('../model/table.js');

exports.save = function(tableNumber, seats, callback) {
    var table = new Table({
        tableNumber: tableNumber,
        seats: seats
    });

    table.save(function(err){
        if(err){
            callback(err, null);
        }else{
            callback(null, {'table': table});
        }
    });
};

exports.findAll = function(callback){
    Table.find(function(err, tables){
        if(err){
            callback(err,null);
        }else{
            callback(null, {'tables': tables});
        }
    });
};

exports.delete = function(id, callback){
    Table.remove({'_id': id}, function(err){
        if (err) {
            callback(err, 500);
        } else {
            callback(null, {});
        }
    });
};

exports.findById = function(id, callback){
    Table.findById(id, function(err, table){
        if(err){
            callback(err,null);
        }else{
            callback(null, {'table': table});
        }
    });
};