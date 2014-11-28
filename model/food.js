/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');

var Food = mongoose.Schema ({
    categoryId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    }
});

module.exports = mongoose.Model("Food", Food);