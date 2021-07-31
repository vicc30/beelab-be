const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    title: { type: String,
        required: [true, "no puede estar vacío"],
        unique:true,
        index: true },
    description: { type: String,
        required: [true, "no puede estar vacío"]},
    photo: {type: String}, // links a las fotografías
    type: { type: String, required: [true, "no puede estar vacío"] },
    discount: { type: Number },
    offer: { type: Boolean },
    price: { type: Number, required: [true, "no puede estar vacío"]},
    onSale: { type: Number, required: [true, "no puede estar vacío"]},
    amount: { type: Number, required: [true, "no puede estar vacío"]}
}, { timestamps: true });

ProductSchema.plugin(uniqueValidator, { message: "Ya existe" });

ProductSchema.methods.publicData = function () {
    return {
        id: this.id,
        title: this.title,
        description: this.description,
        photo: this.photo,
        type: this.type,
        discount: this.discount,
        offer: this.offer,
        price: this.price,
        onSale: this.onSale,
        amount: this.amount
    };
};

mongoose.model("Product", ProductSchema);