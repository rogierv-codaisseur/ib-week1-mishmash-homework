class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    this.items = [...this.items, { name: itemName, quantity, pricePerUnit: price }]
  }

  clear() {
    this.items = [];
  }

  total() {
    return this.items.reduce((acc, inc) => {
      return acc += inc.quantity * inc.pricePerUnit
    }, 0)
  }
}

module.exports = ShoppingCart