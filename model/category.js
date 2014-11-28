/**
 * Created by Turbut Alin on 28.11.2014.
 */
var mongooose = require('mongoose');

var Category = mongoose.Schema({
   name: {
       type: String,
       required: true
   }
});

module.exports = mongoose.Model('Category', Category);