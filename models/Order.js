class Order {
    constructor(id, productId, userId, qty, address, cancel, amount, payMethod, payId) {
        this.id = id;
        this.productId = productId;
        this.userId = userId;
        this.qty = qty;
        this.address = address;
        this.cancel = cancel;
        this.amount = amount;
        this.payMethod = payMethod;
        this.payId = payId;
    }
}

export default Order;