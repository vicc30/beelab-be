/*  Archivo controllers/carts.js
 *  Simulando la respuesta de objetos Cart
 *  en un futuro aquí se utilizarán los modelos
 */

const Product = require('../models/Product');
const Cart = require('../models/Cart');

function createCart(req, res) {
    let cart = new Cart(req.body);
    res.status(201).send(cart);
}

function getCart(req, res) {
    let product1 = new Product(1234, "crema", "crema de miel de abeja", "cremas", false, false, "", 100, false, false);
    let cart1 = new Cart(1, product1.id, 5, 1);
    res.send(cart1);
}

function updateCart(req, res) {
    let product1 = new Product(1234, "crema", "crema de miel de abeja", "cremas", false, false, "", 100, false, false);
    let cart1 = new Cart(1, product1.id, 5, 1);
    let toUpdate = req.body;
    cart1 = { ...cart1, ...toUpdate };
    res.send(cart1);
}

function deleteCart(req, res) {
    res.status(200).send(`Carrito ${req.params.id} eliminado`);
}

module.exports = {
    createCart,
    getCart,
    updateCart,
    deleteCart
}
