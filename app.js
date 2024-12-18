var express = require('express')

var UserRouter = require('./controllers/userController')
var mongoose = require('mongoose')
var HotelRouter = require('./controllers/HotelCotroller')

var app = express()

const BaseUrl = 'mongodb://localhost:27017/nodeTest'

mongoose.connect(BaseUrl).then(()=>{
    console.log('connect To dataBase...')
}).catch((error)=>{
    console.log(error)
})

app.use(express.json())

app.use('/saif',UserRouter)
app.use('/hotel',HotelRouter)
var http = require('http')
var server = http.createServer(app)


server.listen(3000,()=>{
    console.log('connect..')
})