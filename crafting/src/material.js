class Material {
    constructor(material, price, amount, units) {
        this.name = material;
        this.price = price;
        this.amount = amount;
        this.units = units;
    }
    useMaterial(materialUsed) {
        if (materialUsed <= this.amount) {
            this.amount = this.amount - materialUsed;
            return `You now have ${this.amount} ${this.units} of ${this.name} left.`
        } else {
            return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
        }
    }
    calculateMaterialCost(cost) {
        var materialCost = this.price * this.amount;
        return materialCost;
    }
}

module.exports = Material;

// npm test crafting/test/material-test.js