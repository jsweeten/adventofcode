import fs from 'fs/promises';

let data = '';

async function readFile() {
    try {
        data = await fs.readFile("input.txt", "utf8");
    } catch (e) {
        throw Error("File not found");
    }
}

await readFile();

let floor = 0;

/*********** PART ONE *************/

// for (let char of data) {
//     if (char === "(") {
//         floor++;
//     } else if (char === ")") {
//         floor--;
//     }
// }

// console.log(floor);
// Answer: 74

/*********** PART TWO *************/

for (let i = 0; i < data.length; i++) {
    data[i] === "(" ? floor++ : floor--;

    if (floor < 0) {
        console.log("SANTA IS IN THE BASEMENT!!!");
        let position = i + 1;
        console.log(`Position: ${position}`);
        break;

        // Answer: 1795
    }
}
