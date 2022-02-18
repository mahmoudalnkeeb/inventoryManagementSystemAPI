const productsRoutes = require('./apis/products_routes')
const router = require('express').Router();

router.get('/', (req , res)=>{
    res.send('api is running');
})
router.use('/products',productsRoutes)

module.exports = router