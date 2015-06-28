/**
 * Created by Alin on 3/2/2015.
 */
var Order = require('../model/order.js')
/**
 * Controller for Order entity
 */
exports.save = function(drinks, foods, price, tableId, waiterId, sentTime, orderType, callback){
    var newOrder = new Order({
        drinks: drinks,
        foods: foods,
        price: price,
        tableId: tableId,
        waiterId: waiterId,
        sentTime: new Date(sentTime),
        orderType: orderType
    });
    newOrder.save(function(err){
       if(err) {
           callback(err, 500);
       } else {
           callback(null, {'order' : newOrder});
       }
    });
};

exports.saveOrder = function(order, callback){
    order = JSON.parse(order);
    var newOrder = new Order({
        drinks: order.drinks,
        foods: order.foods,
        price: order.price,
        tableId: order.tableId,
        waiterId: order.waiterId,
        sentTime: new Date(order.sentTime),
        orderType: order.orderType
    });
    newOrder.save(function(err){
       if(err) {
           callback(err, 500);
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

exports.updateOrderType = function(id, orderType, callback){
    Order.findByIdAndUpdate(id, {orderType: orderType}, function(err,order){
        if(err){
            callback(err,500);
        }else{
            callback(null, {'order': order});
        }
    });
};

exports.findByType = function(orderType, callback){
    Order.find({orderType: orderType}, function(err, orders){
        if(err){
            callback(err,500);
        }else{
            callback(null, {'orders': orders});
        }
    });
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

