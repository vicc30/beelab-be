/*  Archivo controllers/users.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

import Product from '../models/Product';

function createProduct(req, res) {
    let product = new Product(req.body);
    res.status(201).send(product);
}

function getProducts(req, res) {
    let product1 = new Product(1, "crema", "crema de miel de abeja", "cremas", 0, false, "", 100, false, false);
    let product2 = new Product(2, "jabon", "jabon de avena", "jabones", 10, true, "", 100, true, false);
    res.send([product1, product2]);
}

function updateProduct(req, res) {
    let product1 = new Product(1, "crema", "crema de miel de abeja", "cremas", 0, false, "", 100, false, false);
    let toUpdate = req.body;
    product1 = { ...product1, ...toUpdate };
    res.send(product1);
}

function deleteProduct(req, res) {
    res.status(200).send(`Producto ${req.params.id} eliminado`);
}

export default {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}
