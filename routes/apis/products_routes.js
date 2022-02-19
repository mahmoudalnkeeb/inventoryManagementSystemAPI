const products = require('../../handlers/products');
const router = require('express').Router();

router.get('/', products.read);
router.get('/sold', products.readSold);
router.get('/search', products.readOne);
router.post('/', products.create);
router.put('/', products.update);
router.delete('/', products.deleteOne);

module.exports = router;
