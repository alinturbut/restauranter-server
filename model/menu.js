/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');
var Drink = require('./drink.js');
var Food = require('./food.js');

var Menu = new mongoose.Schema({
   name: {
       type: String,
       require: true
   },
   drinks: {
       type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Drink'}],
       required: true
   },

    foods: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Food'}],
        required: true
    }
});

module.exports = mongoose.model('Menu', Menu);