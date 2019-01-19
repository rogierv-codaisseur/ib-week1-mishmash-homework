class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    this.items = [
      ...this.items,
      { name: itemName, quantity, pricePerUnit: price }
    ];
  }

  clear() {
    this.items = [];
  }

  total() {
    return this.items.reduce((totalValue, item) => {
      return (totalValue += item.quantity * item.pricePerUnit);
    }, 0);
  }
}

module.exports = ShoppingCart;
