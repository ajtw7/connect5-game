const canvas = document.querySelector("#myCanvas")
// console.log(canvas)
const ctx = canvas.getContext('2d')

// Initializing the main game space with 7 columns and 8 rows (56 positions).
console.log('WASSUPPP')
let towerArray = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
]

console.log(towerArray[2][0])

// for loop to draw vertical lines
for (let x = 0; x < towerArray.length; x++) {
    strokeLineHoriz(ctx, x + 1) // dont want the array to start at 0
}

function strokeLineHoriz(ctx, x) {
    ctx.beginPath();
    ctx.moveTo(x * 100, 0); //100px is the space between each column
    ctx.lineTo(x * 100, 500);
    ctx.stroke();
    ctx.closePath();

}

// for loop to draw horizontal lines
for (let y = 0; y < towerArray[0].length; y++) {
    stokeLineVert(ctx, y + 1)
}

function stokeLineVert(ctx, y) {
    ctx.beginPath();
    ctx.moveTo(0, y * 71.4);
    ctx.lineTo(800, y * 71.4);
    ctx.stroke();
    ctx.closePath();
}

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