const mongoose = require("mongoose");
const Product = mongoose.model("Product");

function createProduct(req, res, next) {
    let product = new Product(req.body);
    product.save().then(newProduct => {
        res.status(201).json(newProduct);
    }).catch(next);
}

function getProducts(req, res, next) {
    Product.find().then(products => {
        res.send(products);
    }).catch(next);
}

function updateProduct(req, res, next) {
    Product.findById(req.params.id).then(product => {
        if (!product) return res.sendStatus(401);
        let newInfo = req.body;
        if (typeof newInfo.title !== 'undefined') product.title = newInfo.title;
        if (typeof newInfo.description !== 'undefined') product.description = newInfo.description;
        if (typeof newInfo.photo !== 'undefined') product.photo = newInfo.photo;
        if (typeof newInfo.type !== 'undefined') product.type = newInfo.type;
        if (typeof newInfo.discount !== 'undefined') product.discount = newInfo.discount;
        if (typeof newInfo.offer !== 'undefined') product.offer = newInfo.offer;
        if (typeof newInfo.price !== 'undefined') product.price = newInfo.price;
        if (typeof newInfo.amount !== 'undefined') product.amount = newInfo.amount;
        product.save().then(updatedProduct => {
            res.status(201).json(updatedProduct.publicData());
        }).catch(next);
    }).catch(next);
}

function deleteProduct(req, res) {
    Product.findOneAndDelete({ _id: req.params.id }).then(r => {//Buscando y eliminando usuario en MongoDB.
        res.status(200).send(`Producto ${req.params.id} eliminado: ${r}`);
    });
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}