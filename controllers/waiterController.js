/**
 * Created by Alin on 11/16/2014.
 */
var Waiter = require('../model/waiter');

/**
 * Controller for the waitress class
 */
exports.save = function(firstName, lastName, username, password, monthsOfExperience, callback){
    var newWaiter = new Waiter({
        firstName: firstName,
        lastName: lastName,
        usernamae: username,
        password: password,
        monthsOfExperience: monthsOfExperience
    })
    newWaiter.save(function(err){
        if(err){
            callback(err,500);
        }else{
            callback(null,{'waiter:': newWaiter});
        }
    });
};

exports.update = function(id, firstName, lastName, username, password, monthsOfExperience, callback) {
    Waiter.findByIdAndUpdate(id,{
        firstName: firstName,
        lastName: lastName,
        usernamae: username,
        password: password,
        monthsOfExperience: monthsOfExperience
    }, function(err,waiter) {
        if (err) {
            callback(err, 500);
        } else {
            callback(null, {'waiter:': waiter});
        }
    });

};

exports.delete = function(id, callback) {
    Waiter.remove({'_id': id}, function(err){
        if (err) {
            callback(err, 500);
        } else {
            callback(null, {});
        }
    });
};

exports.findAll = function(callback){
    Waiter.find(function(err,waiters){
        if(err){
            callback(err,500);
        }else{
            callback(null,{'waiters:': waiters});
        }
    });
};