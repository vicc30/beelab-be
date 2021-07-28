class Product {
    constructor(id, title, description, type, discount, offer, image, price, newProduct, onSale) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
        this.discount = discount;
        this.offer = offer;
        this.image = image;
        this.price = price;
        this.newProduct = newProduct;
        this.onSale = onSale;
    }
}

export default Product;