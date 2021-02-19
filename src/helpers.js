class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    plus = (other) => new Vector(this.x + other.x, this.y + other.y);
}

export default Vector;

export const valley = [
    "######################################################################################",
    "#####                 OOOO    ***         OOOO                OOOO              ######",
    "##   ***                **#O #              **#O***             **#O              **##",
    "##   ***                **#O #              **#O***             *@#O              **##",
    "#####                 OOOO    ***         OOOO                O@OO              ######",
    "#    ***     O    ****    *@#    O    ****    *#***  O    ****    *#   O    ##**    *#",
    "#    ***     O    ****    *#@    O    ****    *#@**  O    ****    *#   O    ##**    *#",
    "##   ***                **#O #              **@O***             **@O              **##",
    "##   ***       @        @*@O #              **#O***             **#O              **##",
    "##   ***                **#O #              **@O***             **@O              **##",
    "#   *##**         **  O  @# O   *     **  O  *# ##**      **  O  *#         **  O  *##",
    "#   *##**         **  O  *# O   *     **  O  *# #@**      **  O  *#         **  O  *##",
    "#   *##**         **  O  *# O   *     **  O  *# ##**      **  O  *#         **  O  *##",
    "#       O         ***@*               *****        O      *****             ##***    #",
    "#       O         *@***               **@**        O      *****             ##***    #",
    "#                 O @*     O          O **     O          @ **     O        ##**     #",
    "#   *##**         **  O  *# O   *     **  O  *# ##**      **  O  *#         **  O  *##",
    "#   *##**         **  O  *# O   *     **  O  *# ##**      *@  O  *#         **  O  *##",
    "#                 O **     O          O **     O          O **     O        ##**     #",
    "#*          #**       O    ##*   **       O    #     **       O    #  #**       O    #",
    "#*          #**       O    ##*   **       O    #     **       O    #  #**       O    #",
    "#                 O **     O          O **     O          O **     O        ##**     #",
    "#*          #**       O    ##*   **       O    #     **       O    #  #**       O    #",
    "#                 O @@     O          O **     @          O **     O        ##**     #",
    "#                 O **     O          O @*     O          O **     O        ##**     #",
    "#                 O **     O          O **     O          O @*     O        ##**     #",
    "#                 O @*     O          O **     @          @ **     O        ##**     #",
    "#                 O **     O          O @*     O          O **     O        ##**     #",
    "#                 O *@     O          O **     O          @ **     O        ##**     #",
    "#                 O **     O          O **     O          O **     O        ##**     #",
    "#*          #**       O    ##*   **       O    #     **       O    #  #**       O    #",
    "#*          #**       O    @@*   **       O    #     **       O    #  #**       O    #",
    "#   O       #*             #*   O*             #     *             #  #*             #",
    "#   O       #*             @*   O*             #     *             #  #*             #",
    "#   O       #*             #*   O*             #     *             #  #*             #",
    "#***        ##**   O     **  *** #**   O     **      #**   O     **   ##**   O     **#",
    "#@****     ###***       *### #***@***       *@#@*    #***       *### ###***       *###",
    "######################################################################################"
];

export const grid = ['top left', 'top middle', 'top right', 'bottom left', 'bottom middle', 'bottom right'];

export const directionNames = "n ne e se s sw w nw".split(" ");

export const directions = {
    "n": new Vector(0, 1),
    "ne": new Vector(1, 1),
    "e": new Vector(1, 0),
    "se": new Vector(1, -1),
    "s": new Vector(0, -1),
    "sw": new Vector(-1, -1),
    "w": new Vector(-1, 0),
    "nw": new Vector(-1, 1)
};


// Helper functions

export const charFromElement = (element)  => {
    if (element === null)
        return " ";
    else
        return element.originChar;
}

export const randomElement = (array) => array[Math.floor(Math.random() * array.length)];


export const elementFromChar = (legend, ch) => {
    if (ch === " ") 
        return null;
    if (ch === undefined)
        return null
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

export const dirPlus = (dir, n) => {
    var index = directionNames.indexOf(dir);
    return directionNames[(index + n + 8) % 8];
}
