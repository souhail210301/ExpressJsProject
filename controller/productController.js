var express = require('express')
const {list,afficherStock } = require('../service/productService')
var router = express.Router()

router.get('/list', list)
router.get('/:id/:qt',afficherStock )


module.exports = router