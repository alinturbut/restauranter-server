/**
 * Created by Alin on 3/14/2015.
 */
var CategoryService = require('../services/categoryService.js');

module.exports = function(app,responseFunction) {
    app.get('/category/all', function(req,res){
        CategoryService.findAll(function(err,data){
            responseFunction(res, err, data);
        });
    });
    app.get('/category/findByName', function(req,res){
        CategoryService.findByName(req.query.name, function(err,data){
            responseFunction(res,err,data);
        });
    });
};
