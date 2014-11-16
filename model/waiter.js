/**
 * Created by Alin on 11/16/2014.
 */
var mongoose = require('mongoose');
var Schema = mongoose.schema;

/**
 * Schema for the waitress
 */
var Waiter = new Schema({
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
    }
});