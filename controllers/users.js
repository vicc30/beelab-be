/*  Archivo controllers/users.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const User = require('../models/User');

function createUser(req, res) {
  let user = new User(req.body);
  res.status(201).send(user);
}

function getUsers(req, res) {
  let user1 = new User(1, 'Victor', 'Cruz', 'victor@test.com');
  let user2 = new User(2, 'Jesús', 'Serrano', 'jesus@test.com');
  res.send([user1, user2]);
}

function updateUser (req, res) {
  let user1 = new User(req.params.id, 'Victor', 'Cruz', 'victor@test.com');
  let toUpdate = req.body;
  user1 = { ...user1, ...toUpdate };
  res.send(user1);
}

function deleteUser(req, res) {
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
}
