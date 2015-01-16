/**
 * Created by Turbut Alin on 25.11.2014.
 */

var waiterRoutes = require('./waiterRoutes.js');
var loginRoutes = require('./loginRoutes.js');

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
};
