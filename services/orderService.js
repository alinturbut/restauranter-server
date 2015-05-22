/**
 * Created by Alin on 3/2/2015.
 */
var Order = require('../model/order.js')
/**
 * Controller for Order entity
 */
exports.save = function(drinks, foods, price, tableId, callback){
    var newOrder = new Order({
        drinks: drinks,
        foods: foods,
        price: price,
        tableId: tableId
    });
    newOrder.save(function(err){
       if(err) {
           callback(err);
       } else {
           callback(null, {'order' : newOrder});
       }
    });
};

exports.findById = function(id, callback){
    Order.findById(id, function(err, order){
        if(err){
            callback(err);
        } else{
            if(order == null){
                callback({'message' : 'No order with that id!'}, 401);
            }else{
                callback(null, {order : order});
            }
        }
    });
};

exports.addDrinksToOrder = function(id, drinks, addedPrice, callback){
    Order.findById(id, function(err, order){
        if(err){
            callback(err);
        }else{
            var newPrice = order.price + addedPrice;
            Order.findByIdAndUpdate(id, {$push: {'drinks' : drinks}}, {$set: {price: newPrice}}, {upsert:true}, function(err, order){
                if(err){
                    callback(err);
                }else{
                    callback(null, {'order': order});
                }
            });
        }
    })
};

exports.addFoodsToOrder = function(id, foods, addedPrice, callback){
    Order.findById(id, function(err, order){
        if(err){
            callback(err);
        }else{
            var newPrice = order.price + addedPrice;
            Order.findByIdAndUpdate(id, {$push: {'foods' : foods}}, {$set: {price: newPrice}}, {upsert:true}, function(err, order){
                if(err){
                    callback(err);
                }else{
                    callback(null, {'order': order});
                }
            });
        }
    })
};

