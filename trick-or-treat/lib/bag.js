class Bag {
  constructor(hasCandy) {
    this.empty = true;
    this.isDelicious = true;
    this.count = 0;
    this.candies = hasCandy || [];
    // if (this.candies.includes(hasCandy)) {
    //   this.contains = true;
    // }  
  }
  fill(candyToPush) {
    this.candies.push(candyToPush);
    this.count = this.candies.length;
  }


  contains(candy) {
    for (var i = 0; i < this.candies.length; i++) {
      if (candy === this.candies[i].type) {
        return true;
      } else {
        return false;
      }
    }
  }
}

  // contains(str) {
  //   if (this.candies.includes(str)) {
  //     return true;
  //   }

    // input: 1 argument = string
    // output: boolean
      // find out if this.candies includes the string entered as an argument in the candy instance of Candy

 








// creating new instance of Bag called bag
// creating new instance of Candy called candy
  // adding new candyType called "Swedish Fish"

// fill bag

// parens means method

// candy is argument, which means 1 parameter

module.exports = Bag;

// npm test trick-or-treat/test/bag-test.js