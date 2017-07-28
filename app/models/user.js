/**
 * Created by duong on 7/27/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name : String,
    password : String,
    admin : Boolean
}));
