/*  Archivo controllers/users.js
 *  Simulando la respuesta de objetos Order
 *  en un futuro aquí se utilizarán los modelos
 */

const Order = require('../models/Order');

function createOrder(req, res) {
    let user = new Order(req.body);
    res.status(201).send(user);
}

function getOrders(req, res) {
    let order1 = new Order(1, 1, 1, 5, "Mexico, CDMX", false, 500, "paypal", 12345);
    let order2 = new Order(2, 2, 1, 8, "Guadalajara, Jalisco", false, 800, "transferencia", 2345);
    res.send([order1, order2]);
}

function updateOrder(req, res) {
    let order1 = new Order(1, 1, 1, 5, "Mexico, CDMX", false, 500, "paypal", 12345);
    let toUpdate = req.body;
    order1 = { ...order1, ...toUpdate };
    res.send(order1);
}

function deleteOrder(req, res) {
    res.status(200).send(`Orden ${req.params.id} eliminada`);
}

module.exports = {
    createOrder,
    getOrders,
    updateOrder,
    deleteOrder
}
