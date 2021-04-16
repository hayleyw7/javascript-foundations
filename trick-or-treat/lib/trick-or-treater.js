// const Candy = require("./candy");

class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        this.bag = bag;
        this.hasCandy = false;
        // this.countCandies = this.bag.count;
    }
    putCandyInBag(candy) {
        this.hasCandy = true;
        this.bag.fill(candy);
    }
    eat() {
        // bag.this.count.pop
    }
}




module.exports = TrickOrTreater;

// npm test trick-or-treat/test/trick-or-treater-test.js