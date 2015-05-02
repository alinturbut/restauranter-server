var DrinkService = require('../services/drinkService.js');

module.exports = function(app, responseFunction){
    app.get('/drink/all',function(req,res){
        DrinkService.findAll(function(err,data){
            responseFunction(res, err, data);
        });
    });

    app.get('/drink/categoryId',function(req,res){
        FoodService.findByCategoryId(req.query.categoryId, function(err,data){
            responseFunction(res, err, data);
        });
    });

    app.post('/drink/addDrink',function(req,res){
        var drinkName = req.body.name;
        var drinkPrice = req.body.price;
        var categoryId = req.body.category;
        var drinkType = req.body.type;
        var drinkManufacturer = req.body.manufacturer;
        var drinkAlcoholPercentage = req.body.alcoholPercentage;

        DrinkService.save(drinkType, categoryId, drinkName, drinkManufacturer, drinkAlcoholPercentage, drinkPrice, function(err,data){
            responseFunction(res, err,data);
        });
    });
};