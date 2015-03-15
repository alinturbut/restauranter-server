/**
 * Created by Alin on 3/15/2015.
 */
var Menu = require('../model/menu.js');

exports.save = function(name, drinks, foods, callback){
    var newMenu = new Menu({
        name: name,
        drinks: drinks,
        foods: foods
    });
    newMenu.save(function(err){
        if(err){
            callback(err);
        }else{
            callback(err, {'newMenu': newMenu});
        }
    });
};

exports.findByName = function(name, callback){
    Menu.findOne({name: name}, function(err, menu){
        if(err){
            callback(err);
        }else{
            callback(err, {'menu':menu});
        }
    });
};
