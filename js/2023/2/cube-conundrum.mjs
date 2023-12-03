import fs from 'fs/promises';

let data = '';

async function readFile() {
    try {
        data = await fs.readFile('input.txt', 'utf8')
            .then(data => data.split(/\r?\n/));
    } catch (e) {
        console.log(`File read error: ${e}`);
    }
}

await readFile();

let totalSum = 0;

/***************** PART ONE *******************/

const GAME_CONSTRAINTS = {
    red: 12, green: 13, blue: 14
}

class Game {
    constructor(id, rounds) {
        this.id = id,
        this.rounds = rounds;
    }    
    possible = true;
}

class Round {
    constructor(red, green, blue) {
        this.red = red,
        this.green = green,
        this.blue = blue;
    }
}

const pattern = /(\d{1,2}) (red|green|blue)/g;

function analyzeRounds(game) {  
    game.rounds.forEach(round => {
        let matches = round.match(pattern);
        let currentRound = sortColors(matches);
        if (currentRound.red > GAME_CONSTRAINTS.red ||
            currentRound.green > GAME_CONSTRAINTS.green ||
            currentRound.blue > GAME_CONSTRAINTS.blue) {
                game.possible = false;
        }

        return game;
    });
}

function sortColors(diceData) {

    let currentRound = new Round(0, 0, 0);
    let i = 0;
    while (i < diceData.length) {
        let [amt, color] = diceData[i].split(' ');

        switch (color) {
            case 'red':
                currentRound.red = parseInt(amt);
                break;
            case 'green':
                currentRound.green = parseInt(amt);
                break;
            case 'blue':
                currentRound.blue = parseInt(amt);
                break;
            default:
                break;
        }
        i++;
    }
    return currentRound;
}

data.map(str => {
    let [gameId, roundString] = str.split(':');
    let [, id] = gameId.split(' ');
    let rounds = roundString.split(';');

    let game = new Game(parseInt(id), rounds);

    analyzeRounds(game);

    if (game.possible) {
        console.log(`Game ${game.id} is possible`);
        totalSum += game.id;
    }
});

console.log(`Total Sum: ${totalSum}`);

// Answer: 2716

