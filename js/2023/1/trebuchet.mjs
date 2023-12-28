import fs from 'fs/promises';

let data = '';

async function readFile() {
    try {
        data = await fs.readFile('input.txt', 'utf8');
    } catch (e) {
        console.log(`File read error: ${e}`);
    }
}

await readFile();

const dataByLine = data.split(/\r?\n/);

let totalSum = 0;

/***************** PART ONE *******************/

// function decodeCalibration(dataByLine) {
    
//     const pattern = /([0-9])/g;
    
//     let matches = dataByLine.match(pattern);
    
//     let firstNum = matches[0]
//     let lastNum = matches[matches.length - 1]
    
//     let coordinate = firstNum + lastNum;
    
//     return parseInt(coordinate);
// }

// for (let i = 0; i < dataByLine.length; i++) {
//     let calibrationCoordinates = decodeCalibration(dataByLine[i]);
    
//     totalSum += calibrationCoordinates;
// }

// console.log(`Total Sum of all coordinates: ${totalSum}`);

// Answer: 54081

/***************** PART TWO *******************/


function decodeCalibration(dataByLine) {
    
    const pattern = /([0-9]|one|two|three|four|five|six|seven|eight|nine)/g;
    
    const numbers = /([0-9])/;

    let matches = dataByLine.match(pattern);
    
    let lastMatch = matches.length - 1;
    let firstNum = matches[0]
    let lastNum = matches[lastMatch]
    
    if (!numbers.test(firstNum)) {
        firstNum = convertText(firstNum);
    }

    if (!numbers.test(lastNum)) {
        lastNum = convertText(lastNum);
    }
    
    // console.log(`First Num: ${firstNum}, Last Num: ${lastNum}`);
    
    let coordinate = firstNum + lastNum;

    return parseInt(coordinate);
}

function convertText(string) {
    switch (string) {
        case 'one':
            console.log(`${string} has been converted to 1`);
            return "1";
        case 'two':
            console.log(`${string} has been converted to 2`);
            return "2";
        case 'three':
            console.log(`${string} has been converted to 3`);
            return "3";
        case 'four':
            console.log(`${string} has been converted to 4`);
            return "4";
        case 'five':
            console.log(`${string} has been converted to 5`);
            return "5";
        case 'six':
            console.log(`${string} has been converted to 6`);
            return "6";
        case 'seven':
            console.log(`${string} has been converted to 7`);
            return "7";
        case 'eight':
            console.log(`${string} has been converted to 8`);
            return "8";
        case 'nine':
            console.log(`${string} has been converted to 9`);
            return "9";
        default:
            throw error(`Number conversion failed! String ${string}`);
    }
}

for (let i = 0; i < dataByLine.length; i++) {
    console.log(' ');
    console.log(`Iteration ${i + 1}`)
    let calibrationCoordinates = decodeCalibration(dataByLine[i]);
    totalSum += calibrationCoordinates;
    console.log(`${calibrationCoordinates} has been added to total sum. New value is: ${totalSum}`);
}

console.log(`Total Sum of all coordinates: ${totalSum}`);
