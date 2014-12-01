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
}
