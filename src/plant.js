class Plant {
    constructor() {
        this.energy = 3 + Math.random() * 4;
    };

    act = (context) => {
        if (this.energy > 15) {
            let space = context.find(" ");
            if (space)
                return {type: "reproduce", direction: space};
        }
        if (this.energy < 20) 
            return {type: "grow"};
    }
}

export default Plant;
