const fs = require('fs');
const pattern = /(\d{1,2})/g;

function findMatches(myNums, winningNums) {  
    let myNumsArray = myNums.match(pattern);
    let winningNumsArray = winningNums.match(pattern);
    let score = 0;

    for (let i = 0; i < myNumsArray.length; i++) {
        for (let j = 0; j < winningNumsArray.length; j++) {
            if (myNumsArray[i] === winningNumsArray[j]) {
                score = addScore(score);
            }
        }
    }
    return score;
}

function addScore(num) {
    if (num === 0) {
        return 1;
    }  else {
        return num * 2;
    }
}

const sum = (data = [], part1 = true) => {
    let total = 0;
    data.map(str => {
        let [cardId, numString] = str.split(':');
        let [, id] = cardId.split(' ');
        let [myNums, winningNums] = numString.split('|');
    
        if (part1) {
            total += findMatches(myNums, winningNums);
        } else {
            throw Error("Not implemented");
        }
    });
    return total;
}

const filename = process.argv[2];
const part1 = process.argv[3] === 'true' || process.argv[3] === '1';
const data = fs.readFileSync(filename, 'utf-8').split(/\r?\n/);
const output = sum(data, part1);
console.log(`Output: ${output}`);
// Answer part one: 20117