import fs from 'fs/promises';

let data = '';
let finalScore = 0;

async function readFile() {
    try {
        data = await fs.readFile('input.txt', 'utf8');
        // console.log(data);
    } catch (e) {
        console.log(`File read error: ${e}`);
    }
}

await readFile();

const pattern = /^(A|B|C) (X|Y|Z)$/gm;

/***************** PART ONE *******************/

/*
let match;

while ((match = pattern.exec(data)) !== null) {
    const [_, opp, me] = match.map(str => str.trim());
    
    switch (opp) {
        case "A":
            // Opponent plays ROCK
            if (me === 'X') {
                // I play ROCK
                // Rock adds 1 to final score
                finalScore += 1;
                // 3 points for a draw
                finalScore += 3;
                console.log(`opp: ${opp} me: ${me}`);
                console.log("draw");
                break;
            } else if (me === 'Y') {
                // I play PAPER
                // Paper adds 2 to final score
                finalScore += 2;
                // 6 points for a win
                finalScore += 6;
                console.log(`opp: ${opp} me: ${me}`);
                console.log("win");
                break;
            } else if (me === 'Z') {
                // I play SCISSORS
                // Scissors adds 3 to final score
                finalScore += 3;
                // 0 points for a loss
                console.log(`opp: ${opp} me: ${me}`);
                console.log("loss");
                break;
            } else {
                throw Error("No result found");
            }
        case "B":
            // Opponent plays PAPER
            if (me === 'X') {
                // I play ROCK
                // Rock adds 1 to final score
                finalScore += 1;
                // 0 points for a loss
                console.log(`opp: ${opp} me: ${me}`);
                console.log("loss");
                break;
            } else if (me === 'Y') {
                // I play PAPER
                // Paper adds 2 to final score
                finalScore += 2;
                // 3 points for a draw
                finalScore += 3;
                console.log(`opp: ${opp} me: ${me}`);
                console.log("draw");
                break;
            } else if (me === 'Z') {
                // I play SCISSORS
                // Scissors adds 3 to final score
                finalScore += 3;
                // 6 points for a win
                finalScore += 6;
                console.log(`opp: ${opp} me: ${me}`);
                console.log("win");
                break;
            } else {
                throw Error("No result found");
        }
        case "C":
            // Opponent plays SCISSORS
            if (me === 'X') {
                // I play ROCK
                // Rock adds 1 to final score
                finalScore += 1;
                // 6 points for a win
                finalScore += 6;
                console.log(`opp: ${opp} me: ${me}`);
            console.log("win");
            break;
        } else if (me === 'Y') {
            // I play PAPER
            // Paper adds 2 to final score
            finalScore += 2;
            // 0 points for a loss
            console.log(`opp: ${opp} me: ${me}`);
            console.log("loss");
            break;
        } else if (me === 'Z') {
            // I play SCISSORS
            // Scissors adds 3 to final score
            finalScore += 3;
            // 3 points for a draw
            finalScore += 3;
            console.log(`opp: ${opp} me: ${me}`);
            console.log("draw");
            break;
        } else {
            throw Error("No result found");
        }
        default: 
            throw Error("No opponent move found");
        }
    }
    
console.log(`Final Score: ${finalScore}`);

*/
    
/***************** PART TWO *******************/
    
let match;

while ((match = pattern.exec(data)) !== null) {
    const [_, opp, outcome] = match.map(str => str.trim());
    
    switch (opp) {
        case "A":
            // Opponent plays ROCK
            if (outcome === 'X') {
                // I need to lose
                // Play scissors to add 3 to final score
                finalScore += 3;
                // 0 points for a loss
                console.log("lose");
                break;
            } else if (outcome === 'Y') {
                // I draw
                // Play rock to add 1 to final score
                finalScore += 1;
                // 3 points for a draw
                finalScore += 3;
                console.log("draw");
                break;
            } else if (outcome === 'Z') {
                // I win
                // Play paper to add 2 to final score
                finalScore += 2;
                // 6 points for a win
                finalScore += 6;
                console.log("win");
                break;
            } else {
                throw Error("No result found");
            }
        case "B":
            // Opponent plays PAPER
            if (outcome === 'X') {
                // I lose
                // Play rock to add 1 to final score
                finalScore += 1;
                // 0 points for a loss
                console.log("lose");
                break;
            } else if (outcome === 'Y') {
                // I draw
                // Play paper to add 2 to final score
                finalScore += 2;
                // 3 points for a draw
                finalScore += 3;
                console.log("draw");
                break;
            } else if (outcome === 'Z') {
                // I win
                // Play scissors to add 3 to final score
                finalScore += 3;
                // 6 points for a win
                finalScore += 6;
                console.log("win");
                break;
            } else {
                throw Error("No result found");
            }
        case "C":
            // Opponent plays SCISSORS
            if (outcome === 'X') {
                // I lose
                // Play paper to add 2 to final score
                finalScore += 2;
                // 0 points for a loss
                console.log("lose");
                break;
            } else if (outcome === 'Y') {
                // I draw
                // Play scissors to add 3 to final score
                finalScore += 3;
                // 3 points for a draw
                finalScore += 3;
                console.log("draw");
                break;
            } else if (outcome === 'Z') {
                // I win
                // Play rock to add 1 to final score
                finalScore += 1;
                // 6 points for a win
                finalScore += 6;
                console.log("win");
                break;
            } else {
                throw Error("No result found");
            }
        default: 
            throw Error("No opponent move found");
        }
    }

console.log(`Final Score: ${finalScore}`);