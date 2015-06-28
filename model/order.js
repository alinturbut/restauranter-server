/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');
var Drink = require('./drink.js');
var Food = require('./food.js');

var Order = new mongoose.Schema({
   drinks: {
       type: mongoose.Schema.Types.Mixed,
       required: false
   },

    foods: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },

    price: {
        type: Number,
        required: true
    },

    waiterId: {
        type: String,
        required: true
    },

    tableId: {
        type: String,
        required: true
    },

    sentTime: {
        type: Date,
        required: true
    },

    orderType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', Order);