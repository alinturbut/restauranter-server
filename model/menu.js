/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');
var Drink = require('./drink.js');
var Food = require('./food.js');

var Menu = mongoose.Schema({
   drinks: {
       type: [Drink],
       required: true
   },

    foods: {
        type: [Food],
        required: true
    }
});

module.exports = mongoose.model('Menu', Menu);