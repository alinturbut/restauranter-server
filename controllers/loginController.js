/**
 * Created by Alin on 12/1/2014.
 */
var Waiter = require('../model/waiter.js');
var Administrator = require('../model/administrator.js');

/**
 * Controller for logging a waiter/administrator in
 */
exports.login = function(email, password, callback){
    Waiter.find({username: email}, function(err, waiters){
       if(err){
           callback(err,500);
       }else{
           if(waiters.length == 0){
               callback({'message' : 'No waiter with that username!'}, 404);
           }else{
               var hashedPassword = utils.hashPassword(password);
               if(hashedPassword != waiters[0].password){
                   callback({'message': 'Invalid password!'}, 404);
               }else{
                   callback(null, {'waiter': waiters[0]});
               }
           }
       }
    });
}