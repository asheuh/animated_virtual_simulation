import React from 'react';
import './App.css';
import World from './world';
import SmartHerbivore from './herbivore';
import Plant from './plant';
import Predator from './predator';
import * as helpers from './helpers';
import { valley } from './section';

class Wall {};

function App() {
    const legends = {
        "#": Wall,
        "🐏": SmartHerbivore,
        "🌳": Plant,
        "🐆": Predator
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>CRITTERS WORLD SIMULATION</h1> 
                <World 
                    map={valley}
                    height={helpers.valley.length}
                    width={helpers.valley[0].length}
                    legend={legends}
                />
            </header>
        </div> 
    );
}

export default App;
