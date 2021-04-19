var Skier = require('./Skier');

class Lift {
  constructor(chairLimit) {
      this.inService = true;
      this.limit = chairLimit;
      this.skiers = [];
      this.safetyBar = "up"; 
  }
  admitSkier(skierName, ticket) {
    if (this.skiers.length < this.limit && ticket === true) {
        this.skiers.push("skierName");
    } else {
        return `Sorry, Kayla. Please wait for the next lift!`
    }
  }
  startLift() {
      if (this.skiers.length === this.limit) {
        this.safetyBar = "down";
      } else if (this.skiers.length === this.limit - 1) {
        return `We still need 1 more skier!`
      } else if (this.skiers.length === this.limit - 2) {
        return `We still need 2 more skiers!`
      }
  }
}

module.exports = Lift;

// npm test ski-lift/test/Lift-test.js