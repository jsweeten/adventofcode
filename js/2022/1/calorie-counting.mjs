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

// const pattern = /(\d{4,5}\r?\n?)*/g;
// const matches = data.match(pattern);

// let maxSum = 0;
// let maxSumGroup;
// let groupNumber = 0;

// matches.forEach((group) => {
//     if (!group.trim()) {
//         return;
//     }
    
//     const numbers = group.trim().split('\n').map(Number);
    
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
    
//     if (groupNumber === 0) {
//         console.log(`Sum for first group: ${sum}`);
//         if (sum !== 61970) {
//             throw Error("This is not the correct number for the first group!");
//         }
//     }
    
//     if (sum > maxSum) {
//         maxSum = sum;
//         maxSumGroup = group;
//     }
//     console.log(`Group number: ${groupNumber} Sum: ${sum}`);
//     groupNumber++;
// });

// console.log(`Most calories carried by a single elf: ${maxSum}`);
// console.log("Caloric value of each item in this elf's inventory:");
// console.log(`${maxSumGroup}`);

// Answer: 69501

/**************** PART TWO *******************/


const pattern = /(\d{4,5}\r?\n?)*/g;
const matches = data.match(pattern);

let maxSum = 0;
let maxSumGroup;
let topThreeElves = [0, 0, 0];
let groupNumber = 0;

matches.forEach((group) => {
    if (!group.trim()) {
        return;
    }
    
    const numbers = group.trim().split('\n').map(Number);
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    
    if (groupNumber === 0) {
        // console.log(`Sum for first group: ${sum}`);
        if (sum !== 61970) {
            throw Error("This is not the correct number for the first group!");
        }
    }
    
    if (sum > maxSum) {
        maxSum = sum;
        maxSumGroup = group;
    }
    
    if (sum > topThreeElves[0]) {
        topThreeElves[2] = topThreeElves[1];
        topThreeElves[1] = topThreeElves[0];
        topThreeElves[0] = sum;
    } else if (sum > topThreeElves[1]) {
        topThreeElves[2] = topThreeElves[1];
        topThreeElves[1] = sum;
    } else if (sum > topThreeElves[2]) {
        topThreeElves[2] = sum;
    }

    groupNumber++;
});

let totalSum = topThreeElves[0] + topThreeElves[1] + topThreeElves[2];

console.log();
console.log("Top Three Elves:");
console.log("----------------");
console.log(`${topThreeElves[0]}`);
console.log(`${topThreeElves[1]}`);
console.log(`${topThreeElves[2]}`);
console.log("----------------");
console.log();
console.log(`Total calories for all three top elves combined: ${totalSum}`);

// Answer: 202346