/**
 * Created by Alin on 12/9/2014.
 */
var DatabaseState = require('../model/databaseState.js');

exports.findDatabaseState = function(callback){
    DatabaseState.find(function(err,databaseState){
       if(err){
           callback(err,500);
       }else{
           callback(null, {'databaseState:': databaseState[0]});
       }
    });
};

exports.markDatabaseInitialized = function(){
    DatabaseState.find(function(err,databaseState){
        if(err){
            //do nothing
        }else{
            databaseState[0].state = true;
        }
    })
};