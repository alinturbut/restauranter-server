/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');
var Drink = require('./drink.js');
var Food = require('./food.js');

var Order = new mongoose.Schema({
   drinks: {
       type: [Drink],
       required: false
   },

    foods: {
        type: [Food],
        required: false
    },

    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', Order);