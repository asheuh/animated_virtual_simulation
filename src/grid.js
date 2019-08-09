import React, { Component } from 'react';
import Vector from './helpers';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.space = [];
        this.height = props.height;
        this.width = props.width;
        this.state = {
            disabled: false,
            btnText: "Start Simulation"
        };
    };

    componentDidMount() {
        const { world } = this.props;
        this.setState({content: world.toString()});
    }

    time = () => setInterval(() => this.tick(), 200);

    isInside = (vector) => {
        return vector.x >= 0 && 
            vector.x < this.width && 
            vector.y >= 0 && 
            vector.y < this.height; 
    }

    get = (vector) => this.space[vector.x + vector.y * this.width];

    set = (vector, value) => this.space[vector.x + vector.y * this.width] = value;

    forEach = (f, context) => {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let value = this.space[x + y * this.width];
                if (value)
                    f.call(context, value, new Vector(x, y));
            }
        }
    }

    tick = () => {
        const { world } = this.props;
        if (world) {
            world.turn();
            this.setState({content: world.toString()});
        }
    }

    handleClick = (e) => {
        const { disabled } = this.state;
        if (disabled) return;
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.setState({btnText: "Start Simulation"})
        } 
        else {
            this.interval = setInterval(() => this.tick(), 200);
            this.setState({btnText: "Stop Simulation"});
        }
    }

    render() {
        const { content, btnText } = this.state;

        const gridSize = {
            position: 'relative', 
            width: 'fit-content',
            background: '#A9F5A9',
            color: 'black'
        };

        return (
            <div>
                <div style={gridSize}>
                    <pre>{content}</pre>
                </div>
                <button 
                    className="button" 
                    onClick={this.handleClick}>
                    {btnText}
                </button>
            </div>
        );
    }
}

export default Grid;
