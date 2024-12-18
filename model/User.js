const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    nom: String,
    email:String,
    age:Number
})

const Usertest = mongoose.model('usertest',userSchema)

module.exports = Usertest