var product = require('../products.json')

function list(req,res,next){
    res.json(product)
}

async function afficherStock(req,res,next){
    try {
        const id=req.params.id;
        const qt=parseInt(req.params.qt ,10)
        const prod=product[id]
        if (!prod) {
            throw new("product doesnt exists")
            
        } else {
            const totale_price=prod.price*qt
            res.json({id:id ,qt:qt,unit_price:prod.price, totale_price:totale_price})
        }
        
    } catch (error) {
        res.status(404).error("")
        
    }


}

module.exports = {list,afficherStock}
