/**
 * Created by Alin on 3/2/2015.
 */

var OrderService = require('../services/orderService');
var TableService = require('../services/tableService');

module.exports = function(app, responseFunction) {
    app.post('/order/makeOrder', function(req, res) {
        // var drinks = req.body.drinks;
        // var food = req.body.foods;
        // var tableId = req.body.tableId;
        // var price = req.body.price;
        // var waiterId = req.body.waiterId;
        // var orderType = req.body.orderType;
        // var sentTime = req.body.sentTime;
        var order = req.body.order;

        // OrderService.save(drinks, food, price, tableId, waiterId, sentTime, orderType, function(err, order){
        //     responseFunction(res,err,order);
        // })

        OrderService.saveOrder(order, function(err, order){
            responseFunction(res,err,order);
        })
    });

    app.post('/order/markOrderActive', function(req,res){
        var active = req.body.active;
        var id = req.body.id;

        OrderService.markOrderActive(id,active, function(err,order){
            responseFunction(res,err,order);
        });
    });

    app.post('/order/askReceipt', function(req, res){
        var orderId = req.body.orderId;
        var tableId = req.body.tableId;

        OrderService.updateOrderType(orderId,"Finished",function(err,order){
            responseFunction(res, err,order);
        });

        TableService.markIsOccupied(tableId, false, function(err, data){
            if(err) {
                console.log(err);
            }else{
                console.log('Table marked as not occupied');
            }
        });
    });

    app.get('/order/findActive', function(req,res){
        OrderService.findByType("ACTIVE", function(err,orders){
            responseFunction(res,err,orders);
        });
    });
};