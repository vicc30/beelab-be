const router = require('express').Router();
const {
    createOrder,
    getOrders,
    updateOrder,
    deleteOrder
} = require('../controllers/order')

router.get('/', getOrders);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
