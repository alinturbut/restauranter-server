/**
 * Created by Alin on 3/15/2015.
 */
var Menu = require('../model/menu.js');
var FoodService = require('../services/foodService.js');
var DrinkService = require('../services/drinkService.js');
var async = require('async');

exports.save = function(name, drinks, foods, callback){
    var newMenu = new Menu({
        name: name,
        drinks: drinks,
        foods: foods
    });
    newMenu.save(function(err){
        if(err){
            callback(err);
        }else{
            callback(err, {'newMenu': newMenu});
        }
    });
};

exports.findByName = function(name, callback){
    Menu.findOne({name: name}, function(err, menu){
        if(err){
            callback(err);
        }else{
            callback(err, {'menu':menu});
        }
    });
};

exports.findByCategoryId = function(categoryId, responseFunction) {
    var allMenuItems = "";
    async.series([
       function(callback){
            FoodService.findByCategoryId(categoryId, function(err, data){
                if(err) {
                    callback(err);
                } else {
                    if(data.foods > 0) {
                        allMenuItems += data.foods;
                    }
                    callback(null);
                }
            });
       },

       function(callback) {
            DrinkService.findByCategoryId(categoryId, function(err,data){
                if(err) {
                    callback(err);
                } else {
                    if(data.drinks.length > 0) {
                        allMenuItems += data.drinks;
                    }
                    callback(allMenuItems);
                }
            })
       }
    ],  function(result, err){
        if(result) {
            responseFunction(err, {'items:':result});
        }
    });
};
