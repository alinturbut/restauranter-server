/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');

var Drink = mongoose.Schema({
    type: {
        type: String,
        required: true
    },

    categoryId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    manufacturer: {
        type: String,
        required: false
    },

    alcoholPercentage: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Drink', Drink);