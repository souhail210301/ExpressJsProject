var express = require('express')
var router = express.Router()
const { list, create ,updateUser,deleteUser} = require('../service/userService')
var validate = require('../middleware/validation')

router.get('/list', list)
router.post('/create/:age', validate, create)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

module.exports = router