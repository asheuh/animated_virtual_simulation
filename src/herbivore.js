import * as helpers from './helpers';

class SmartHerbivore {
    constructor() {
        this.energy = 30;
        this.direction = "e";
    }

    act = (view) => {
        let space = view.find(" ");
        let plants = view.findAll("*");
        if (space && this.energy > 100)
            return {type: "reproduce", direction: space};
        if (plants.length > 1)
            return {type: "eat", direction: helpers.randomElement(plants)};
        if (view.look(this.direction) !== " " && space)
            this.direction = space;
        return {type: "move", direction: this.direction};
    }
}

export default SmartHerbivore;
