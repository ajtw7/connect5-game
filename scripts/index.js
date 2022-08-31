const canvas = document.querySelector("#myCanvas")
// console.log(canvas)
const ctx = canvas.getContext('2d')
ctx.font = '30px Arial'

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


// for loop to draw horizontal lines
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

// for loop to draw vertical lines
for (let y = 0; y < towerArray[0].length; y++) {
    stokeLineVert(ctx, y + 1)
}


//Canvas circle 
function stokeLineVert(ctx, y) {
    ctx.beginPath();
    ctx.moveTo(0, y * 71.4);
    ctx.lineTo(800, y * 71.4);
    ctx.stroke();
    ctx.closePath();
}

// --------------------

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

const updateScoreBoard = (color) => {
    medallionsPlayed.innerHTML++;
    spacesRemaining.innerHTML--;
    /* if (color === 'blue') {
        playerTurn.innerHTML = 'Player 1'
    } */

}

let medallionsPlayed = document.querySelector('#medallionsPlayed');
console.log(medallionsPlayed)

let spacesRemaining = document.querySelector('#spacesRem');
console.log(spacesRemaining)

let playerTurn = document.querySelector('#playerTurn')


// Algorithm to check for possible WIN scenarios where player lines five medallions in a row
// "c" represents the counter

function checkForWinLeftRightDiag(x, y, color) {
    /*
    check left-right diagonal win scenarios
    on the canvas Y is vert, X is horiz
    */
    if ((y + 4 <= towerArray.length - 1) && (x + 4 <= towerArray[y].length - 1)) {
        for (let c = 0; c < 5; c++) {
            if (towerArray[y + c][x + c] != color) {
                return false;
            }
        }
        return true;
    }

}

/* 
check right-left diagonal win scenarios
(subtract from the x axis to shift the function right as it scans the array)    
*/
function checkForWinRightLeftDiag(x, y, color) {

    if ((y + 4 <= towerArray.length - 1) && (x - 4 >= 0)) {
        for (let c = 0; c < 5; c++) {
            if (towerArray[y + c][x - c] != color) {
                return false;
            }
        }
        return true;
    }

}

// check for vertical win scenarios
function checkForWinVertical(x, y, color) {
    // check vertical win scenarios  
    console.log(y, y + 4, towerArray.length, towerArray.length - 1)

    if (y + 4 <= towerArray.length - 1) {
        console.log('hi')
        for (let c = 0; c < 5; c++) {
            if (towerArray[y + c][x] != color) {
                return false;
            }
        }
        return true;
    }
    return false;

}

// check for horizontal win scenarios
function checkForWinHorizontal(x, y, color) {
    if (x + 4 <= towerArray[y].length - 1) {
        console.log('hi')
        for (let c = 0; c < 5; c++) {
            if (towerArray[y][x + c] != color) {
                return false;
            }
        }
        return true;
    }
    return false;

}

// "Click" event listener to add shapes into spaces
let currentTurn = 'blue';
canvas.addEventListener('click', function (event) {
    console.log('clicked in browser', event.clientX, event.clientY)
    let {
        x,
        y
    } = canvas.getBoundingClientRect()
    console.log('canvas top left corner', x, y)
    console.log('where we clicked in canvas', event.clientX - x, event.clientY - y)
    console.log('index of array', Math.floor((event.clientY - y) / 71.4), Math.floor((event.clientX - x) / 100))

    // Array coordinates
    let arrayX = Math.floor((event.clientX - x) / 100)
    let arrayY = Math.floor((event.clientY - y) / 71.4)

    // If it is player 1's turn, alert player 2 they are next
    if (currentTurn == 'blue') {
        towerArray[arrayY][arrayX] = 'blue'
        for (let i = 0; i < towerArray.length; i++) {
            for (let j = 0; j < towerArray[i].length; j++) {
                console.log('x', j, 'y', i)
                // check for all possible
                if (checkForWinLeftRightDiag(j, i, 'blue') || checkForWinRightLeftDiag(j, i, 'blue') || checkForWinVertical(j, i, 'blue') || checkForWinHorizontal(j, i, 'blue')) {
                    alert('blue wins')
                }
            }
        }
        currentTurn = 'red'
        playerTurn.innerHTML = 'Player 2'
        alert("now red's turn")
    } else {
        // If it is player 2's turn, alert player 1 they are next
        towerArray[arrayY][arrayX] = 'red'
        for (let i = 0; i < towerArray.length; i++) {
            for (let j = 0; j < towerArray[i].length; j++) {
                if (checkForWinLeftRightDiag(j, i, 'red') || checkForWinRightLeftDiag(j, i, 'red') || checkForWinVertical(j, i, 'red') || checkForWinHorizontal(j, i, 'red')) {
                    alert('red wins')
                }
            }
        }
        currentTurn = 'blue'
        playerTurn.innerHTML = 'Player 1'
        alert("now blue's turn")
    }
    updateScoreBoard()
    // console.log(towerArray)
})

const intervalId = setInterval(function () {
    //console.log('hi')
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // redraw the lines after ever clearance
    for (let x = 0; x < towerArray.length; x++) {
        strokeLineHoriz(ctx, x + 1) // dont want the array to start at 0
    }
    for (let y = 0; y < towerArray[0].length; y++) {
        stokeLineVert(ctx, y + 1)
    }

    // loop through 2D array
    for (let i = 0; i < towerArray.length; i++) {
        for (let j = 0; j < towerArray[i].length; j++) {

            // if it is player 1's turn, draw a "blue" medallion 
            if (towerArray[i][j] == 'blue') {
                ctx.beginPath();
                ctx.arc(j * 100 + 50, i * 71.4 + 35.7, 25, 0, Math.PI * 2);
                ctx.fillStyle = 'blue';
                ctx.fill();
                ctx.stroke();
                // if it is player 1's turn, draw a "red" medallion
            } else if (towerArray[i][j] == 'red') {
                ctx.beginPath();
                ctx.arc(j * 100 + 50, i * 71.4 + 35.7, 25, 0, Math.PI * 2);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.stroke();
            }




        }
    }

}, 1000) // cycle every second

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