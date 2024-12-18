var os = require('os')

function osInfo(req, res, next){
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform()
    })
}

function osCpus(req,res,next){
    res.json({
        cpus:os.cpus()
    })
}
function osCpusById(req, res, next){
    res.json(os.cpus()[req.params.id])
}
module.exports = { osInfo, osCpus, osCpusById }