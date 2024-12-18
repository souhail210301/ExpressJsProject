var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Chat = new Schema({
    msg : String,
    dateCreation: Date,
})
module.exports = mongoose.model('chats', Chat)
