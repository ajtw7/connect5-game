// Initializing the main game space with 7 columns and 8 rows (56 positions).

let tower = [
    row1 = [{
            positionX: 0,
            positionY: 0
        },
        {
            positionX: 0,
            positionY: 1
        },
        {
            positionX: 0,
            positionY: 2
        },
        {
            positionX: 0,
            positionY: 3
        },
        {
            positionX: 0,
            positionY: 4
        },
        {
            positionX: 0,
            positionY: 5
        },
        {
            positionX: 0,
            positionY: 6
        },
        {
            positionX: 0,
            positionY: 7
        }
    ],
    row2 = [{
            positionX: 1,
            positionY: 0
        },
        {
            positionX: 1,
            positionY: 1
        }, {
            positionX: 1,
            positionY: 2
        }, {
            positionX: 1,
            positionY: 3
        }, {
            positionX: 1,
            positionY: 4
        }, {
            positionX: 1,
            positionY: 5
        }, {
            positionX: 1,
            positionY: 6
        },
        {
            positionX: 1,
            positionY: 7
        }
    ],

    row3 = [{
            positionX: 2,
            positionY: 0
        },
        {
            positionX: 2,
            positionY: 1
        },
        {
            positionX: 2,
            positionY: 2
        },
        {
            positionX: 2,
            positionY: 3
        },
        {
            positionX: 2,
            positionY: 4
        },
        {
            positionX: 2,
            positionY: 5
        },
        {
            positionX: 2,
            positionY: 6
        },
        {
            positionX: 2,
            positionY: 7
        }

    ],
    row4 = [{
            positionX: 3,
            positionY: 0
        },
        {
            positionX: 3,
            positionY: 1
        },
        {
            positionX: 3,
            positionY: 2
        },
        {
            positionX: 3,
            positionY: 3
        },
        {
            positionX: 3,
            positionY: 4
        },
        {
            positionX: 3,
            positionY: 5
        },
        {
            positionX: 3,
            positionY: 6
        },
        {
            positionX: 3,
            positionY: 7
        }
    ],

    row5 = [{
            positionX: 4,
            positionY: 0
        },
        {
            positionX: 4,
            positionY: 1
        },
        {
            positionX: 4,
            positionY: 2
        },
        {
            positionX: 4,
            positionY: 3
        },
        {
            positionX: 4,
            positionY: 4
        },
        {
            positionX: 4,
            positionY: 5
        },
        {
            positionX: 4,
            positionY: 6
        },
        {
            positionX: 4,
            positionY: 7
        }
    ],

    row6 = [{
            positionX: 5,
            positionY: 0
        },
        {
            positionX: 5,
            positionY: 1
        },
        {
            positionX: 5,
            positionY: 2
        },
        {
            positionX: 5,
            positionY: 3
        },
        {
            positionX: 5,
            positionY: 4
        },
        {
            positionX: 5,
            positionY: 5
        },
        {
            positionX: 5,
            positionY: 6
        },
        {
            positionX: 5,
            positionY: 7
        }
    ],

    row7 = [{
            positionX: 6,
            positionY: 0
        },
        {
            positionX: 6,
            positionY: 1
        },
        {
            positionX: 6,
            positionY: 2
        },
        {
            positionX: 6,
            positionY: 3
        },
        {
            positionX: 6,
            positionY: 4
        },
        {
            positionX: 6,
            positionY: 5
        },
        {
            positionX: 6,
            positionY: 6
        },
        {
            positionX: 6,
            positionY: 7
        }
    ],

]

// Initializing both players
const playerOne = {
    medallionsPlayed: 0,
    stack: function () {},
}

const playerTwo = {
    medallionsPlayed: 0,
    stack: function () {},
}

// Initializing a class for the coins that used for each space
class medallion {
    constructor(id, color) {
        this.id = id
        this.color = color
        this.positionX = 0
        this.positionY = 0

    }
}

const scoreboard = {
    medallionsPlayed: 0,
    spacesRemaining: 56
}



/* 
Conditionals

1) if playerOne, drops a medallion, into a space, playerTwo must go next.
        1a) scoreboard must be updated

2) if any column/row is full, player must drop medallion elsewhere.
    2a) if a space is occupied, it must be flipped from "null" to TRUE 

3) if player positions 5 medallions of the same color in a row, said player win the game

4) if medallionsPlayed = 56 or if spacesRemaining = 0, the game is over

5)






*/