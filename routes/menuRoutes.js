/**
 * Created by Alin on 3/15/2015.
 */
var MenuService = require('../services/menuService.js')

module.exports = function(app, responseFunction){
    app.get('/menu/findByName',function(req, res){
        MenuService.findByName(req.query.name, function(err,menu){
            responseFunction(res,err,menu);
        })
    });

    app.get('/menu/findByCategoryId',function(req, res){
        MenuService.findByCategoryId(req.query.categoryId, function(err,menu){
            responseFunction(res,err,menu);
        })
    });
};
