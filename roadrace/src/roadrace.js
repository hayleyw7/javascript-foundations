var Runner = require('./Runner.js');

class Roadrace {
  constructor(raceObject) {
    this.name = raceObject.title;
    this.location = raceObject.city;
    this.distance = raceObject.distance;
    this.participants = [];
  }
  setDistance(miles) {
    this.distance = miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }
  registerParticipants(people) {
    this.participants.push(people);
  }
  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;

// npm test roadrace/test/roadrace-test.js