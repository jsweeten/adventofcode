import fs from 'fs/promises';

let data = '';

async function readFile() {
    try {
        data = await fs.readFile('input.txt', 'utf8');
        // console.log(data);
    } catch (e) {
        console.log(`File read error: ${e}`);
    }
}

await readFile();

/***************** PART ONE *******************/

/*

let sum = 0;

let rucksacks = data.split(/\r?\n/);

for (let i = 0; i < rucksacks.length; i++) {
    let compartmentSize = ((rucksacks[i].length) / 2);
    
    let compartment1 = [];
    let compartment2 = [];

    for (let j = 0; j < compartmentSize; j++) {
        compartment1.push(rucksacks[i][j]);
    }
    for (let j = compartmentSize; j <= rucksacks[i].length; j++) {
        compartment2.push(rucksacks[i][j]);
    }
    
    let match;

    for (let j = 0; j < compartment1.length; j++) {
        for (let ii = 0; ii < compartment2.length; ii++) {
            if (compartment1[j] === compartment2[ii]) {
                match = compartment2[ii];
                break;
            }
        }
    }
    
    console.log(`Matching letter: ${match}`);

    let matchValue;
    
    if (match[0].toUpperCase() === match[0]) {
        matchValue = match.toLowerCase().charCodeAt(0) - 70;
        console.log("Character is Uppercase");
    } else {
        matchValue = match.charCodeAt(0) - 96;
        console.log("Character is Lowercase");
    }
    sum += matchValue;

    console.log(`compartment 1: ${compartment1} compartment 2: ${compartment2}`);
}
    
console.log(`Final Sum: ${sum}`);

*/
    
/***************** PART TWO *******************/

let sum = 0;

let rucksacks = data.split(/\r?\n/);

let groups = [];
let i = 0;

while (i < rucksacks.length) {
   let group = [rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]];
   groups.push(group);
   i = i + 3;
}

// console.log(groups);

for (let group of groups) {

    let firstElfMatch = [];
    let match;

    for (let i = 0; i < group[0].length; i++) {
        for (let j = 0; j < group[1].length; j++) {
            if (group[0][i] === group[1][j]) {
                firstElfMatch.push(group[1][j]);
            }
        }
    }

    for (let i = 0; i < firstElfMatch.length; i++) {
        for (let j = 0; j < group[2].length; j++) {
            if (firstElfMatch[i] === group[2][j]) {
                match = group[2][j];
                break;
            }
        }
    }
    
    console.log(`Matching letter: ${match}`);

    let matchValue;
    
    if (match[0].toUpperCase() === match[0]) {
        matchValue = match.toLowerCase().charCodeAt(0) - 70;
        console.log("Character is Uppercase");
    } else {
        matchValue = match.charCodeAt(0) - 96;
        console.log("Character is Lowercase");
    }
    sum += matchValue;

}

console.log(`Final Sum: ${sum}`);