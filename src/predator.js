import * as helpers from './helpers';

class Predator {
    constructor() {
        this.energy = 100;
        this.direction = "s";
        this.preySeen = [];
    };

    act = (view) => {
        let space = view.find(" ");
        let prey = view.findAll("O");
        let seenPreyPerTurn = this.preySeen.reduce((a, b) => {
            return a + b;
        }, 0) / this.preySeen.length;

        this.preySeen.push(prey.length);

        if (this.preySeen.length > 6)
            this.preySeen.shift();
        if (prey.length && seenPreyPerTurn > 0.25)
            return {type: "eat", direction: helpers.randomElement(prey)};
        if (view.look(this.direction) !== " " && space)
            this.direction = space;
        return {type: "move", direction: this.direction};
    }
}

export default Predator;
