/**
 * Created by Turbut Alin on 25.11.2014.
 */

var waiterRoutes = require('./waiterRoutes.js');
var loginRoutes = require('./loginRoutes.js');
var categoryRoutes = require('./categoryRoutes.js');
var foodRoutes = require('./foodRoutes.js');
var menuRoutes = require('./menuRoutes.js');
var orderRoutes = require('./orderRoutes.js');
var drinkRoutes = require('./drinkRoutes.js');
var tableRoutes = require('./tableRoutes.js');

module.exports = function(app){
    var responseFunction = function(res,err,response){
        if(err){
            res.status(err).send(response).end();
        }else{
            res.json(response);
            console.log(response);
        }
    }

    waiterRoutes(app,responseFunction);
    loginRoutes(app, responseFunction);
    categoryRoutes(app, responseFunction);
    foodRoutes(app, responseFunction);
    menuRoutes(app, responseFunction);
    orderRoutes(app, responseFunction);
    drinkRoutes(app, responseFunction);
    tableRoutes(app, responseFunction);
};
