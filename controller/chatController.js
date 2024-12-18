var express = require('express')
var router = express.Router()
const { list, create ,updateChat,deleteChat, chatView} = require('../service/chatService')
//var validate = require('../middleware/validation')

router.get('/list', list)
router.get('/chat', chatView)
router.post('/create', create)
router.put('/update/:id',updateChat)
router.delete('/delete/:id',deleteChat)

module.exports = router