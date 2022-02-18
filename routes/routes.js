const productsRoutes = require('./apis/products_routes')
const router = require('express').Router();

router.get('/', (req , res)=>{
    res.render('index.html')
})
router.use('/products',productsRoutes)

module.exports = router