/**
 * Created by Alin on 11/16/2014.
 */
var mongoose = require('mongoose');

/**
 * Schema for the waitress
 */
var Waiter = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    monthsOfExperience: {
        type: Number
    },

    role: {
        type: String,
        default: "waiter"
    }
});

module.exports = mongoose.model('Waiter', Waiter);