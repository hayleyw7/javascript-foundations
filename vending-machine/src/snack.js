class Snack {
  constructor(namey, pricey) {
    this.name = namey;
    this.price = pricey;
    this.itemsInStock = 0;
  }
  stockItems(num) {
    this.itemsInStock += num;
  }
  removeItem() {
    if (this.itemsInStock >= 1) {
      this.itemsInStock--;
      return `Item taken! There are now ${this.itemsInStock} items left.`;
    } else {
      return `Sorry, no ${this.name} left in stock!`
    }
  }
}

module.exports = Snack;

// npm test vending-machine/test/snack-test.js