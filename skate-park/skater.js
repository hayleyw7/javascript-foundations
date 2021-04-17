class Skater {
    constructor(skaterData) {
        this.name = skaterData.name;
        this.skill = skaterData.skill;
        this.tricks = skaterData.tricks;
        this.money = skaterData.cash;
        this.frustration = 0;
    }
    practice(trickToPractice) {
        if (this.tricks[trickToPractice] === false) {
            this.frustration++
        }
        if (this.frustration >= 3) {
            this.tricks[trickToPractice] = true;
            this.frustration = 0;
            return `I just learned to ${trickToPractice}!!!`
        }
    }
}

// from the assert statement, we know skater.tricks.treflip must be false

    // SKATER is an object (instance of class) declared on 258

    // TRICKS can be 2 things:

         // OBJECT OF ITS OWN () - name of object declared on 253, which has treflip as a key inside of it
            // this could be used in >1 instance & can be named anything

         // KEY IN OBJECT () - a key in an unnamed object literal, the object is being passed as an argument when creating new instance of Skater (258 & 262) 

        // the tricks OBJECT (253) is set as the value to the tricks KEY (261)

    // TREFLIP doesn't have to be treflip - it can be literally any trick at all in a trick-containing object variable being created (such as kickflip or bigSpin)




// therefore, when constructing a Skater, we need to create this.tricks & assign the object literal to this.tricks
    // we must named our key this.tricks due to the assert statement







//extra luke notes


                // so it needs to be named when skater is created

            // it's also the value in the tricks:tricks key value pair in ???????? (line 261)





//hayley notes

            // this is instance
// tricks is object
// treflip is key in object
// how does this.tricks.treflip get assigned true or false?
    // whether they do tricks or tricks2



// comes in empty and gets 


module.exports = Skater;

// npm test skate-park/skatepark-test.js