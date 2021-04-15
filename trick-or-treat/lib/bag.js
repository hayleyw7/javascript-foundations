class Bag {
  constructor(hasCandy) {
    this.empty = true;
    this.isDelicious = true;
    this.count = 0;
    this.candies = hasCandy || [];
    this.contains = false;
  }
  fill(candyToPush) {
    this.candies.push(candyToPush);
    this.count = this.candies.length;
  }
  contains() {
    if (this.candies.includes(hasCandy)) {
      return true;
    }
  }
}



















  // tasteCandy(candyEaten) {
  //   if (candyEaten === "Snickers") {
  //     this.isDelicious = false;
  //   }
  // } 






// Bag.tasteCandy("Snickers");

































// creating new instance of Bag called bag
// creating new instance of Candy called candy
  // adding new candyType called "Swedish Fish"

// fill bag

// parens means method

// candy is argument, which means 1 parameter

module.exports = Bag;

// npm test trick-or-treat/test/bag-test.js