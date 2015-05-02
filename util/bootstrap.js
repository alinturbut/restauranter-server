/**
 * Created by Alin on 12/9/2014.
 */
var mongoose = require('mongoose');
var DatabaseStateController = require('../services/databaseStateService.js');
var STRINGS = require('../util/module_messages/strings.js');
var WaiterService = require('../services/waiterService.js');
var DrinkService = require('../services/drinkService.js');
var FoodService = require('../services/foodService.js');
var CategoryService = require('../services/categoryService.js');
var MenuService = require('../services/menuService.js');
var boostrappedWaiters = require('../util/module_messages/waiterNames.js');
var bootstrappedFoodCategories = require('./module_messages/foodCategories.js');
var bootstrappedDrinkCategories = require('./module_messages/drinkCategories.js');
var bootstrappedFoods = require('./module_messages/foods.js');
var bootstrappedDrinks = require('./module_messages/drinks.js');
var async = require('async');

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

            if(dbState === undefined || dbState === null || dbState.state === false){
                console.log(STRINGS.BOOTSTRAP_STARTED);
                initializeWaiters(responseFunction);
                intializeMenu(responseFunction);
                DatabaseStateController.markDatabaseInitialized();
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

var initializeWaiters = function(responseFunction){
    boostrappedWaiters = boostrappedWaiters.waiter1;
    WaiterService.save(boostrappedWaiters.firstName, boostrappedWaiters.lastName,
        boostrappedWaiters.username, boostrappedWaiters.password, boostrappedWaiters.monthsOfExperience, function(err,data){
            if(err){
                responseFunction(err,data);
            }else{
                responseFunction(err,data);
            }
        });
};

var intializeMenu = function(responseFunction){
    async.series([
        function(callback){
            initializeFoodsAndFoodsCategories(responseFunction, callback);
        },
        function(callback){
            initializeDrinksAndDrinksCategories(responseFunction, callback);
        }
    ],
        function(result,err){
            if(result != null){
                initializeMenu(responseFunction);
            }
        }
    );

};

var initializeFoodsAndFoodsCategories = function(responseFunction, largeCallback){
    var bootstrappedFoodArray = bootstrappedFoods.foods;
    var pizzaCategoryId;
    async.series([
        function(callback){
            saveFoodCategories(responseFunction, callback);
        },
        function(callback) {
            loadPizzaCategory(responseFunction, callback);
        }],
        function(result, err){
            pizzaCategoryId = result;
            if(pizzaCategoryId != null) {
                for (var i in bootstrappedFoodArray) {
                    FoodService.save(pizzaCategoryId, bootstrappedFoodArray[i].name, bootstrappedFoodArray[i].price, function (err, data) {
                        if (err) {
                            responseFunction(err);
                        } else {
                            responseFunction(data);
                        }
                    });
                }
                //send this callback with null to wait for drinks callback
                largeCallback(null);
            }
        }
    );
};

var saveFoodCategories = function(responseFunction, callback){
    var bootstrappedFoodCategoriesArray = bootstrappedFoodCategories.foodCategories;
    for(var i in bootstrappedFoodCategoriesArray) {
        CategoryService.save(bootstrappedFoodCategoriesArray[i].name, function(err, data){
            if(err){
                responseFunction(err);
            }else{
                responseFunction(data);
                callback(null);
            }
        });
    }
};

var loadPizzaCategory = function(responseFunction, callback){
    CategoryService.findByName('Pizza', function (err, data) {
        if (err) {
            responseFunction(err);
        } else {
            pizzaCategoryId = data.category['_id'];
            callback(pizzaCategoryId);
        }
    });
}

var initializeDrinksAndDrinksCategories = function(responseFunction, largeCallback){
    var bootstrappedDrinkArray = bootstrappedDrinks.drinks;
    var beerCategoryId;
    async.series([
        function(callback) {
            saveDrinkCategories(responseFunction, callback);
        },
        function(callback){
            loadBeerCategory(responseFunction, callback);
        }],
        function(result, err) {
            beerCategoryId = result;
            if(result != null) {
                for (var i in bootstrappedDrinkArray) {
                    DrinkService.save(bootstrappedDrinkArray[i].type, beerCategoryId, bootstrappedDrinkArray[i].name,
                        bootstrappedDrinkArray[i].manufacturer, bootstrappedDrinkArray[i].alcoholPercentage,
                        bootstrappedDrinkArray[i].price, function (err, data) {
                            if (err) {
                                responseFunction(err);
                            } else {
                                responseFunction(data);
                            }
                        });
                }
                largeCallback("finished");
            }
        });
};

var saveDrinkCategories = function(responseFunction, callback){
    var bootstrappedDrinkCategoriesArray = bootstrappedDrinkCategories.drinkCategories;
    for (var i in bootstrappedDrinkCategoriesArray) {
        CategoryService.save(bootstrappedDrinkCategoriesArray[i].name, function (err, data) {
            if (err) {
                responseFunction(err);
            } else {
                responseFunction(data);
                callback(null);
            }
        });
    }
};

var loadBeerCategory = function(responseFunction, callback){
    CategoryService.findByName('Beer', function (err, data) {
        if (err) {
            responseFunction(err);
        } else {
            beerCategoryId = data.category['_id'];
            callback(beerCategoryId);
        }
    });
};

var initializeMenu = function(responseFunction){
    var allFoods = null;
    var allDrinks = null;
    async.series([
        function(callback){
            FoodService.findAll(function(err,data){
                if(err){
                    responseFunction(err);
                }else{
                    responseFunction(data);
                    allFoods = [];
                    for(var i in data.foods){
                        allFoods.push(data.foods[i]['_id']);
                    }
                    callback();
                }
            });
        },
        function(callback){
            DrinkService.findAll(function(err,data){
                if(err){
                    responseFunction(err);
                }else{
                    responseFunction(data);
                    allDrinks = [];
                    for(var i in data.drinks){
                        allDrinks.push(data.drinks[i]['_id']);
                    }
                    callback(allDrinks);
                }
            });
        }
    ],
        function(result,err){
            if(allDrinks != null && allFoods != null && allFoods != undefined && allDrinks != undefined){
                MenuService.save(STRINGS.MENU_NAME, allDrinks,allFoods,function(err,data){
                    if(err){
                        responseFunction(err);
                    }else{
                        responseFunction(err,data);
                    }
                });
            }
        }
    );
};
