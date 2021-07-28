const { route } = require('./users');

var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('Beelab api');
})

router.use('/users', require('./users'));
router.use('/users/:id/cart', require('./cart'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));

module.exports = router;
