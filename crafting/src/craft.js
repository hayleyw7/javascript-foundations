class Craft {
    constructor(crafty) {
        this.name = crafty.type;
        this.materials = crafty.materials;
        this.completed = false;
    }
    completeCraft() {
        this.completed = true;
        return `All done! It looks great!`
    }
    calculateProjectTotal() {
      var sum = 0;
      for (var i = 0; i < this.materials.length; i++) {
        sum += this.materials[i].price * this.materials[i].amount;
      }
      return sum;
    }
}





// this.materials[i].price * this.materials[i].amount

        // }



module.exports = Craft;

// npm test crafting/test/craft-test.js
