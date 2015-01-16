/**
 * Created by Alin on 12/9/2014.
 */
var mongoose = require('mongoose');

var DatabaseState = mongoose.Schema({
   state: {
       type: Boolean,
       required: true,
       default: false
   }
});

module.exports = mongoose.model('DatabaseState', DatabaseState);