var Snowman = require('./Snowman');

class Human {
  constructor(namey) {
    this.name = namey;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
  }
  gatherMaterials(item, num) {
    var snowman = new Snowman(this.materials);
    this.materials[item] += num;
  }
  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
  }
  placeMagicHat() {
    var snowman = new Snowman(this.materials);
    snowman.canWearMagicHat();
    if (snowman.magicHat === true) {
      return `Woah, this snowman is coming to life!`
    } else {
      return `I guess I didn\'t build it correctly.`
    }
  }
}

module.exports = Human;

// npm test do-you-wanna-build-a-snowman/test/Human-test.js