const router = require('express').Router();
const {
  createCart,
  getCart,
  updateCart,
  deleteCart
} = require('../controllers/carts');

router.get('/', getCart);
router.post('/', createCart);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);

module.exports = router;
