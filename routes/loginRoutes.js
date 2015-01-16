/**
 * Created by Alin on 12/4/2014.
 */
var LoginController = require('../controllers/loginController.js');

module.exports = function(app, responseFunction){
    app.get('/login', function(req, res){
        LoginController.login(req.query.email,req.query.password, function(err, waiters){
            responseFunction(res, err, waiters);
        });
    });
};