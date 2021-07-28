const router = require('express').Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  login
} = require('../controllers/users');
const auth = require('./auth');

router.get('/', auth.requerido, getUsers);
router.get('/:id', auth.requerido, getUsers);
router.post('/', createUser);
router.post('/entrar', login);
router.put('/:id', auth.requerido, updateUser);
router.delete('/:id', auth.requerido, deleteUser);

module.exports = router;
