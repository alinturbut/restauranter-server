/**
 * Created by Alin on 3/7/2015.
 */
var Category = require('../model/category.js');
exports.save = function(name, callback){
    var newCategory = new Category({
        name: name
    });
    newCategory.save(function(err){
        if(err) {
            callback(err);
        }else{
            callback(null,{'category': newCategory});
        }
    });
};

exports.findByName = function(name, callback){
    //var query = Category.where({name: name});
    //query.findOne(function(err,category){
    //    if(err){
    //        callback(err);
    //    }else{
    //        if(category == undefined){
    //            callback(401, 'No category for that name!');
    //        }else{
    //            callback(null, {'category': category});
    //        }
    //    }
    //});
    Category.findOne({name: name}).exec(function(err, category){
        if(err){
            callback(err);
        }else{
            if(category == null){
                callback(401, 'No category for that name!');
            }else{
                callback(null, {'category': category});
            }
        }
    });
};

exports.findById = function(id, callback){
    Category.findById(id, function(err, category){
        if(err){
            callback(err);
        }else{
            if(category == null){
                callback(401, 'No category for that id!');
            }else{
                callback(null, {'category': category});
            }
        }
    })
};

exports.findAll = function(callback){
    Category.find(function(err,categories){
        if(err){
            callback(err);
        }else{
            callback(null, {'categories': categories});
        }
    });
};