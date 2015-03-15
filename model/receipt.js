/**
 * Created by Alin on 12/1/2014.
 */
var mongoose = require('mongoose');

var Receipt = new mongoose.Schema({
   orderId: {
       type: String,
       required: true
   },

    waiterId: {
        type: String,
        required: true
    },

    offerId: {
        type: String,
        required: false
    },

    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Receipt', Receipt);