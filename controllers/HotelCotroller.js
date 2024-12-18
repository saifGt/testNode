var express =require('express')
var router = express.Router()
var {addHotel,getAllHotel,getHotelById,UpdateHotel,DeleteHotel,searchHotel} = require('../services/HotelServices')

router.post('/addHotel',addHotel)
router.get('/getHotel',getAllHotel)
router.delete('/deletehotel/:id',DeleteHotel)
router.put('/updateHotel/:id',UpdateHotel)
router.get('/gethotel/:id',getHotelById)
router.get('/search',searchHotel)




module.exports = router