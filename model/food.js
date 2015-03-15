/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');

var Food = new mongoose.Schema ({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Food", Food);