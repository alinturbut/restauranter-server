/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongoose = require('mongoose');

var Category = new mongoose.Schema({
   name: {
       type: String,
       required: true
   }
});

module.exports = mongoose.model('Category', Category);