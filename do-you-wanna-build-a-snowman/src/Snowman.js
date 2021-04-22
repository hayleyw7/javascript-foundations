class Snowman {
  constructor(snowmanDude) {
    this.carrots = snowmanDude.carrots;
    this.coal = snowmanDude.coal;
    this.buttons = snowmanDude.buttons;
    this.snowballs = snowmanDude.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;

// npm test do-you-wanna-build-a-snowman/test/Snowman-test.js
