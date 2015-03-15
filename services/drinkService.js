/**
 * Created by Alin on 12/1/2014.
 */
var Drink = require('../model/drink.js');

/**
 * Controller for the Drink entity
 */
exports.save = function(type, categoryId, name, manufacturer, alcoholPercentage, price, callback){
    var newDrink = new Drink({
        type: type,
        categoryId: categoryId,
        name: name,
        manufacturer: manufacturer,
        alcoholPercentage: alcoholPercentage,
        price: price
    });
    newDrink.save(function(err){
       if(err){
           callback(err,500);
       }else{
           callback(null, {'drink': newDrink});
       }
    });
};

exports.findByCategoryId = function(categoryId, callback){
    Drink.find({categoryId: categoryId}, function(err, drinks){
       if(err){
           callback(err,500);
       }else{
           callback(null, {'drinks': drinks});
       }
    });
};

exports.findById = function(id, callback){
    Drink.findOne({_id: id}, function(err, drink){
       if(err){
           callback(err,500);
       }else{
           callback(null, {'drink': drink});
       }
    });
}

exports.findAll = function(callback){
    Drink.find(function(err, waiters){
       if(err){
           callback(err,500);
       }else{
           callback(null, {'drinks': waiters});
       }
    });
};