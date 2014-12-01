/**
 * Created by Alin on 12/1/2014.
 */
var crypto = require('crypto');

exports.hashPassword = function(password){
    return crypto.createHash('sha512').update(password).digest('hex');
};