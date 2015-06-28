/**
 * Created by Alin on 5/21/2015.
 */
var mongoose = require('mongoose');

var Table = new mongoose.Schema ({
    tableNumber: {
        type: Number,
        required: true
    },

    seats: {
        type: Number,
        required: true
    },

    isOccupied: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model("Table", Table);