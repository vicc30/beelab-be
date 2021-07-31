const router = require('express').Router();
const {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

const auth = require('./auth');

router.get('/', auth.opcional, getProducts);
router.get('/:id', auth.opcional, getProducts);
router.post('/', auth.required, createProduct);
router.put('/:id', auth.required, updateProduct);
router.delete('/:id', auth.required, deleteProduct);

module.exports = router;
