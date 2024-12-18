var express =require('express')
var router = express.Router()
var {getAllUser,addUser,DeleteUser,UpdateUser,getUserById} = require('../services/userServices')

router.get('/getUsers',getAllUser)
router.post('/add/:age',addUser)
router.delete('/delete/:id',DeleteUser)
router.put('/update/:id',UpdateUser)
router.get('/getUser/:id',getUserById)
var validators = require('yup')


module.exports = router