/**
 * Created by Alin on 3/2/2015.
 */

module.exports = function(app, responseFunction) {
    app.post('/makeOrder', function(req, res) {
        console.log(req.body)
    });
}