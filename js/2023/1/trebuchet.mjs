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

function decodeCalibration(dataByLine) {
    
    const pattern = /([0-9])/g;
    
    let matches = dataByLine.match(pattern);
    
    let firstNum = matches[0]
    let lastNum = matches[matches.length - 1]
    
    let coordinate = firstNum + lastNum;
    
    return parseInt(coordinate);
}

for (let i = 0; i < dataByLine.length; i++) {
    let calibrationCoordinates = decodeCalibration(dataByLine[i]);
    
    totalSum += calibrationCoordinates;
}

console.log(`Total Sum of all coordinates: ${totalSum}`);

// Answer: 54081