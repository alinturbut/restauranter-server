/**
 * Created by Turbut Alin on 25.11.2014.
 */

var waiterRoutes = require('./waiterRoutes.js');

module.exports = function(app){
    var responseFunction = function(res,err,response){
        if(err){
            res.send(response, err);
        }else{
            res.json(response);
            console.log(response);
        }
    }

    waiterRoutes(app,responseFunction);
};
