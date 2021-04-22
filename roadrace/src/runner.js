class Runner {
  constructor(namey, agey) {
    this.name = namey;
    this.age = agey;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(newMiles) {
    this.milesRun += newMiles;
    this.fitness += newMiles;
  }
  stretch() {
    this.fitness += .5;
  }
  runRace(race, miles) {
    this.completedRaces.push(race);
    this.runSomeMiles(miles);
  }

}

module.exports = Runner;

// npm test roadrace/test/runner-test.js
