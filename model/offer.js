/**
 * Created by Alin on 12/1/2014.
 */
var mongoose = require('mongoose');

var Offer = new mongoose.Schema({
   orderId: {
       type: String,
       required: true
   },

    discount: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Offer',Offer);