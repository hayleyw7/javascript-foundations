class Being {
     constructor(namey, speciesy) {
          this.isAlive = true;
          this.name = namey;
          this.species = speciesy;
          this.credits = 0;
     }
     addCredits(creditAmount) {
          this.credits += creditAmount;
     }
     updateCredits(creditAmount) {
          // this.credits += creditAmount;
          this.addCredits(creditAmount);
     }
}

module.exports = Being;

// npm test spaceport/test/being-test.js