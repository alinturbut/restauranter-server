/**
 * Created by Alin on 12/9/2014.
 */
var DatabaseState = require('../model/databaseState.js');

exports.findDatabaseState = function(callback){
    DatabaseState.find(function(err,databaseState){
       if(err){
           callback(err,500);
       }else{
           callback(null, databaseState[0]);
       }
    });
};

exports.markDatabaseInitialized = function(){
    DatabaseState.find(function(err,databaseState){
        if(err){
            console.log(err);
        }else{
            if(databaseState.length === 0){
                createDatabaseStateVariable();
            }else{
                databaseState[0].state = true;
            }
        }
    })
};

var createDatabaseStateVariable = function(){
    var dbState = new DatabaseState({
        state: true
    });
    dbState.save(function(err){
        if(err){
            console.log(err);
        }
    });
};