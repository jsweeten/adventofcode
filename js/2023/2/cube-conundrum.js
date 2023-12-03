const fs = require('fs');
const path = require('path');

const GAME_CONSTRAINTS = {
    red: 12, green: 13, blue: 14
}

class Game {
    constructor(id, rounds) {
        this.id = id,
        this.rounds = rounds;
    }
    possible = true;
    minRound;
    power;
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
    });
    if (game.possible) {
        return game.id;
    } else {
        return 0;
    }
}

function analyzeMinimumDice(game) {  
    let minimumDicePossible = new Round(0,0,0);
    
    game.rounds.forEach(round => {
        let matches = round.match(pattern);
        let currentRound = sortColors(matches);
        
        if (currentRound.red > minimumDicePossible.red) {
            minimumDicePossible.red = currentRound.red;
        }
        if (currentRound.green > minimumDicePossible.green) {
            minimumDicePossible.green = currentRound.green;
        }
        if (currentRound.blue > minimumDicePossible.blue) {
            minimumDicePossible.blue = currentRound.blue;
        }
    });
    game.minRound = minimumDicePossible;
    game.power = (game.minRound.red * game.minRound.green * game.minRound.blue);
    return game.power;
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

const sum = (data = [], part1 = true) => {
    let total = 0;
    data.map(str => {
        let [gameId, roundString] = str.split(':');
        let [, id] = gameId.split(' ');
        let rounds = roundString.split(';');
        let game = new Game(parseInt(id), rounds);
    
        if (part1) {
            total += analyzeRounds(game)
        } else {
            total += analyzeMinimumDice(game);
        }
    });
    return total;
}

if (process.argv.length < 3) {
    console.log(
        `Usage: ${path.basename(process.argv[0])} ${path.basename(
            process.argv[1],)} <input_file> [part1=true]`,
    );
    process.exit(1);
}

const filename = process.argv[2];
const part1 = process.argv[3] === 'true' || process.argv[3] === '1';
const data = fs.readFileSync(filename, 'utf-8').split(/\r?\n/);
const output = sum(data, part1);
console.log(`Output: ${output}`);

// Part 1 Answer: 2716
// Part 2 Answer: 72227
