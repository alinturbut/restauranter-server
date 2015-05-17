/**
 * Created by Alin on 12/1/2014.
 */
var Food = require('../model/food.js');

/**
 * Controller for the Food entity
 */
exports.save = function(categoryId, name, price, callback){
    var newFood = new Food({
        categoryId: categoryId,
        name: name,
        price: price
    })
    newFood.save(function(err){
        if(err){
            callback(err,500);
        }else{
            callback(null, {'food': newFood});
        }
    });
};

exports.findAll = function(callback){
    Food.find(function(err,foods){
        if(err){
            callback(err);
        }else{
            callback(null, {'foods': foods});
        };
    });
};

exports.    findByCategoryId = function(categoryId, callback){
    Food.find({categoryId: categoryId}, function(err, foods){
        if(err){
            callback(err,500);
        }else{
            callback(null, {'foods': foods});
        }
    });
};
