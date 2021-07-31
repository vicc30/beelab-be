class Cart {
    constructor(id, productId, qty, userId) {
        this.id = id;
        this.productId = productId;
        this.qty = qty;
        this.userId = userId;
    }
}

module.exports = Cart;