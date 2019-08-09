import * as helpers from './helpers';


class ActionTypes {
    constructor(world) {
        this.world = world;
    };

    grow = (critter) => {
        critter.energy += 0.5;
        return true;
    }

    move = (critter, vector, action) => {
        let dest = this.world.checkDestination(action, vector);
        if (dest === null ||
            critter.energy <= 1 ||
            this.world.get(dest) != null)
            return false;
        critter.energy -= 1;
        this.world.set(vector, null);
        this.world.set(dest, critter);
        return true;
    }

    eat = (critter, vector, action) => {
        let dest = this.world.checkDestination(action, vector);
        let atDest = dest != null && this.world.get(dest);
        if (!atDest || atDest.energy === null)
            return false;
        critter.energy += atDest.energy;
        this.world.set(dest, null);
        return true;
    }

    reproduce = (critter, vector, action) => {
        let baby = helpers.elementFromChar(this.world.legend, critter.originChar);
        let dest = this.world.checkDestination(action, vector);
        if (dest === null || critter.energy <= 2 * baby.energy || this.world.get(dest))
            return false;
        critter.energy -= 2 * baby.energy;
        this.world.set(dest, baby);
        return true;
    }
}

export default ActionTypes;
