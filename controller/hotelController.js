var express = require('express')
var router = express.Router()
const { list, create ,updateHotel,deleteHotel,searchHotels} = require('../service/hotelService.js')
//var validate = require('../middleware/validation')

router.get('/list', list)
router.post('/create', create)
router.put('/update/:id',updateHotel)
router.delete('/delete/:id',deleteHotel)
router.get('/searchHotel',searchHotels)

module.exports = router