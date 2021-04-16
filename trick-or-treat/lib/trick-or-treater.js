const Candy = require("./candy");
const Costume = require('./costume');
const Bag = require('./bag');

class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        this.bag = bag;
        this.hasCandy = false;
        // this.countCandies = this.bag.count;
        this.countCandies = 0;
        // this.countCandies = bag.count;
        // this.countCandies = bag.candies.length;
    }
    putCandyInBag(candy) {
        this.hasCandy = true;
        this.bag.fill(candy);
        this.countCandies++;
    }

    // goal: ?
    // had to be function called eat()
    // this.countCandies has to be 3 and then equal 0 if function run 3 times

    eat() {
        this.bag.candies.pop();
        this.countCandies--;
    }
}




module.exports = TrickOrTreater;

// npm test trick-or-treat/test/trick-or-treater-test.js