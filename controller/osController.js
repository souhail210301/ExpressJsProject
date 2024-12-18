var express = require('express')
const { osInfo, osCpus, osCpusById } = require('../service/osService')
var router = express.Router()

router.get('/', osInfo)
router.get('/cpus', osCpus)
router.get('/cpus/:id', osCpusById)

module.exports = router