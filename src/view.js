import * as helpers from "./helpers";

class View {
    constructor(world, vector) {
        this.world = world;
        this.vector = vector;
    };

    look = (direction) => {
        let target = this.vector.plus(helpers.directions[direction]);
        if (this.world.isInside(target))
            return helpers.charFromElement(this.world.get(target));
        else
            return "#";
    }

    findAll = (character) => {
        let found = [];
        for (let direction in helpers.directions) 
            if (this.look(direction) === character)
                found.push(direction);
        return found;
    }

    find = (character) => {
        let found = this.findAll(character);
        if (found.length === 0) return null;
        return helpers.randomElement(found);
    }
}

export default View;
