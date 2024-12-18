var mongoose = require('mongoose')
var Schema = mongoose.Schema

const roomSchema = new Schema({
    roomNumber: String,
    type: String,
    price: Number,
    // ... other room properties
});

const hotelSchema = new Schema({
    name: String,
    fabricationDate: Date,
    nbrRooms: Number,
    rooms: [roomSchema]
});

module.exports = mongoose.model('hotels', hotelSchema)
