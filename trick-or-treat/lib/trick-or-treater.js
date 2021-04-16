const Candy = require("./candy");

class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        // this.bag = //empty trickOrTreater.bag.candies
        this.hasCandy = false;
    }
    putCandyInBag(candy) {
        this.hasCandy = true;
        // candy.fill(candy)
    }
    countCandies() {
        // bag.this.count.length
    }
    eat() {
        // bag.this.count.pop
    }
}




module.exports = TrickOrTreater;

// npm test trick-or-treat/test/trick-or-treater-test.js