/**
 * Created by Alin on 12/9/2014.
 */
var mongoose = require('mongoose');
var DatabaseStateController = require('../controllers/databaseStateController.js');
var STRINGS = require('../util/module_messages/strings.js');
var WaiterController = require('../controllers/waiterController.js');
var DrinkController = require('../controllers/drinkController.js');
var FoodController = require('../controllers/foodController.js');
var boostrappedWaiters = require('../util/module_messages/waiterNames.js');

/**
 * Function that will execute a bootstrap over the db creating some drinks, foods, menus, waiters
 */
exports.execute = function(callback){
    var dbState = null;
    DatabaseStateController.findDatabaseState(function(err,data){
        if(err) {
            console.log(err);
        }else{
            dbState = data;

            if(dbState === null || dbState.state === false){
                console.log(STRINGS.BOOTSTRAP_STARTED);
                initializeDatabase(responseFunction);
            }else{
                console.log(STRINGS.BOOSTRAP_OK);
            }
        }
    });

    var responseFunction = function(err,response){
        if(err){
            console.log(err);
        }else{
            console.log(response);
        }
    };
};

var initializeDatabase = function(responseFunction){
    boostrappedWaiters = boostrappedWaiters.waiter1;
    WaiterController.save(boostrappedWaiters.firstName, boostrappedWaiters.lastName,
        boostrappedWaiters.username, boostrappedWaiters.password, boostrappedWaiters.monthsOfExperience, function(err,data){
            if(err){
                responseFunction(err,data);
            }else{
                responseFunction(err,data);
            }
        });
    DatabaseStateController.markDatabaseInitialized();
};