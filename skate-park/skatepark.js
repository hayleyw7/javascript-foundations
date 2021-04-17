class SkatePark {
    constructor(parkData) {
        this.name = parkData.name;
        this.yearFounded = parkData.year;
        this.style = parkData.type;
        this.features = parkData.features;
        this.isPrivate = parkData.isPrivate || false;
        this.cost = parkData.price || 0;
        this.occupants = [];
    }
    admit(skater) {
        if (this.occupants.length >= 3) {
            return `Sorry, we are at max capacity. Thank you for understanding.`
        } else if (this.isPrivate && skater.money >= this.cost) {
            this.occupants.push(skater);
            skater.money -= this.cost;
            return `Welcome to ${this.name}, the cost will be $12.00.`;
        } else if (
            this.isPrivate && skater.money < this.cost) {
                return `Sorry, you don't have enough money.`;
        } else {
            this.occupants.push(skater);
            return `Welcome to the free ${this.name} Skatepark!`;
        }
    }
}


// take pay

module.exports = SkatePark;

// npm test skate-park/skatepark-test.js