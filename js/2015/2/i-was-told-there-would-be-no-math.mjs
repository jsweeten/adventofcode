import fs from 'fs/promises';

let data = '';

async function readFile() {
    try {
        data = await fs.readFile('input.txt', 'utf8');
    } catch (e) {
        throw Error("File not found");
    }
}

await readFile();

/**************** PART ONE *******************/

// let totalSquareFeet = 0;

// const pattern = /^([1-9]?\d)x([1-9]?\d)x([1-9]?\d)$/gm;

// let match;
// let numOfMatches = 0;

// while ((match = pattern.exec(data)) !== null) {
//     const [_, length, width, height] = match;

//     let surfaceArea = 2 * ((length * width) + (length * height) + (height * width));
//     let extraWrap = Math.min((length * width), (length * height), (height * width));

//     console.log(`length: ${length} width: ${width} height: ${height}`);
//     console.log(`Present surface area: ${surfaceArea} Extra Wrapping: ${extraWrap}`);

//     totalSquareFeet = totalSquareFeet + surfaceArea + extraWrap;

//     numOfMatches++;
// }

// console.log(`Number of Matches: ${numOfMatches}`);
// console.log(`Total Wrapping Needed: ${totalSquareFeet} Square Feet`);

// Answer: 1606483

/**************** PART TWO *******************/

let totalRibbonLength = 0;

const pattern = /^([1-9]?\d)x([1-9]?\d)x([1-9]?\d)$/gm;

let match;
let numOfMatches = 0;

while ((match = pattern.exec(data)) !== null) {
    const [_, length, width, height] = match;

    let side1 = parseInt(length) + parseInt(width);
    let side2 = parseInt(length) + parseInt(height);
    let side3 = parseInt(height) + parseInt(width);

    let smallestPerimeter = Math.min((side1 * 2), (side2 * 2), (side3 * 2));
    let ribbonForBow = (length * width * height);

    console.log("");
    console.log(`length: ${length} width: ${width} height: ${height}`);
    console.log(`Smallest Perimeter: ${smallestPerimeter} Ribbon Needed for Bow: ${ribbonForBow}`);
    console.log("");

    totalRibbonLength = totalRibbonLength + smallestPerimeter + ribbonForBow;
    numOfMatches++;
}

console.log(`Matches: ${numOfMatches}`);
console.log(`Total Ribbon Needed: ${totalRibbonLength} Feet`);

// Answer: 3842356