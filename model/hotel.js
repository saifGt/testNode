const mongoose = require('mongoose')

var hotelSchema = mongoose.Schema({
    name: String,
    fabricationDate: Date,
    nbrRooms:{type:Number,default:10}
})

const Hotel = mongoose.model('hotels',hotelSchema)

module.exports = Hotel