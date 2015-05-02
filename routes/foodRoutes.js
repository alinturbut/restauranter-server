/**
 * Created by Alin on 3/14/2015.
 */
var FoodService = require('../services/foodService.js');

module.exports = function(app, responseFunction){
    app.get('/food/all',function(req,res){
        FoodService.findAll(function(err,data){
            responseFunction(res, err, data);
        });
    });

    app.post('/food/addFood',function(req,res){
        var foodName = req.body.name;
        var foodPrice = req.body.price;
        var categoryId = req.body.category;

        FoodService.save(categoryId, foodName, foodPrice, function(err,data) {
            responseFunction(res, err, data);
        });
    });
};