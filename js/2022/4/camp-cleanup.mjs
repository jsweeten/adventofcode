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

// let pairs = data.split(/\r?\n/);

// let amountFullyContained = 0;

// const pattern = /(\d{1,2})-(\d{1,2})/g;

// for (let pair of pairs) {
//     let [firstPair, secondPair] = pair.split(',');
//     console.log(`first pair: ${firstPair} second pair: ${secondPair}`);

//     let [lowerBound1, upperBound1] = firstPair.split('-');
//     let [lowerBound2, upperBound2] = secondPair.split('-');

//     function firstPairCheck() {
//         if (parseInt(lowerBound1) >= parseInt(lowerBound2)) {
//             if (parseInt(upperBound1) <= parseInt(upperBound2)) {
//                 amountFullyContained++;
//                 console.log("pair fully contained");
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }

//     function secondPairCheck() {
//         if (parseInt(lowerBound2) >= parseInt(lowerBound1)) {
//             if (parseInt(upperBound2) <= parseInt(upperBound1)) {
//                 amountFullyContained++;
//                 console.log("pair fully contained");
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
    
//     !firstPairCheck() && secondPairCheck();
// }

// console.log(`Amount fully contained: ${amountFullyContained}`);

// Answer: 560

/***************** PART TWO *******************/

let pairs = data.split(/\r?\n/);

let overlappingPairs = 0;

const pattern = /(\d{1,2})-(\d{1,2})/g;

for (let pair of pairs) {
    let [firstPair, secondPair] = pair.split(',');
    console.log(`first pair: ${firstPair} second pair: ${secondPair}`);

    let [lowerBound1, upperBound1] = firstPair.split('-');
    let [lowerBound2, upperBound2] = secondPair.split('-');

    function firstPairCheck() {
        if (parseInt(lowerBound1) >= parseInt(lowerBound2)) {
            if (parseInt(upperBound2) >= parseInt(lowerBound1)) {
                overlappingPairs++;
                console.log("sections overlapping!");
                return true;
            } else {
                return false;
            }
        }
    }

    function secondPairCheck() {
        if (parseInt(lowerBound2) >= parseInt(lowerBound1)) {
            if (parseInt(upperBound1) >= parseInt(lowerBound2)) {
                overlappingPairs++;
                console.log("sections overlapping!");
                return true;
            } else {
                return false;
            }
        }
    }

    
    !firstPairCheck() && secondPairCheck();
}

console.log(`Overlapping Pairs: ${overlappingPairs}`);

// Answer: 839