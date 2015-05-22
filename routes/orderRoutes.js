/**
 * Created by Alin on 3/2/2015.
 */

var OrderService = require('../services/orderService');

module.exports = function(app, responseFunction) {
    app.post('/makeOrder', function(req, res) {
        var drinks = req.query.drinks;
        var food = req.query.foods;
        var tableId = req.query.tableId;
        var price = req.query.price;

        OrderService.save(drinks, food, price, tableId, function(err, order){
            responseFunction(res,err,order);
        })
    });
}