import React from 'react';
import Grid from './grid';
import * as helpers from './helpers';
import View from './view';
import Vector from './helpers';
import ActionTypes from './actions';

class World extends Grid {
    constructor(props) {
        super(props);
        this.legend = props.legend; 

        this.actionTypes = new ActionTypes(this);
        props.map.forEach((line, y) => {
            for (let x = 0; x < line.length; x++) {
                this.set(new Vector(x, y), helpers.elementFromChar(this.legend, line[x]));
            }
        }, this);
    };

    componentDidMount() {
        return this;
    }

    toString = () => {
        let output = "";
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let element = this.get(new Vector(x, y));
                output += helpers.charFromElement(element);
            }
            output += "\n";
        }
        return output;
    }

    turn = () => {
        let acted = [];
        this.forEach((critter, vector) => {
            if (critter.act && acted.indexOf(critter) === -1) {
                acted.push(critter);
                this.letAct(critter, vector);
            }
        }, this);
    }

    letAct = (critter, vector) => {
        let action = critter.act(new View(this, vector));
        let handled = action &&
            action.type in this.actionTypes &&
            this.actionTypes[action.type].call(this, critter, vector, action);

        if (!handled) {
            critter.energy -= 0.2;
            if (critter.energy <= 0) 
                this.set(vector, null);
        }
    }

    checkDestination = (action, vector) => {
        if (helpers.directions.hasOwnProperty(action.direction)) {
            let dest = vector.plus(helpers.directions[action.direction]);
            if (this.isInside(dest))
                return dest;
        }
    }

    render() {
        return (
            <Grid 
                world={this}
            /> 
        );
    }
}

export default World;
