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

/***************** PART ONE *******************/

// Imma make a class so I can create a new instance for each stack of crates

class Stack {
    constructor(id, index) {
        this.index = index;
        this.id = id;
    }

    crates = [];
}

// The data is an array of characters so first I split the data by line breaks

let dataByLine = data.split(/\r?\n/);

// Then I found the indices (or columns) for each container stack on every row

const stackPositions = [1, 5, 9, 13, 17, 21, 25, 29, 33];

// create an array for the stack objects so they can be iterated over once instantiated

let stacksArray = [];

// Create nine stacks, give them ids, and assign an array index based on their distance from the beginning of the row

for (let i = 0; i <= 8; i++) {
    let id = i + 1;
    const stack = new Stack(id, stackPositions[i]);
    
    // Iterate over the first 8 lines of input.txt
    
    for (let j = 0; j < 8; j++) {
        // If there is a character at that index, add it to the beginning of that stack's "crates" array
        if (dataByLine[j].charAt(stack.index) !== ' ') {
            stack.crates.unshift(dataByLine[j].charAt(stack.index));
        } 
    }
    stacksArray.push(stack);
}

// pattern to parse movement instructions

const instructionPattern = /(move) (\d{1,2}) (from) ([1-9]) (to) ([1-9])/gm;

const instructions = data.match(instructionPattern);

// This function identifies how many crates to move

function findAmount(instruction) {
    let amount = instruction.match(/(\d{1,2})/);
    return parseInt(amount);
}

// This function identifies the stack that the crates are coming from

function findDepartureStack(instruction) {
    let departureStack = instruction.match(/(from) ([1-9])/);
    
    // RegEx matches can be deconstructed into const [_, "from ", match]

    let stackNumber = parseInt(departureStack[2]);

    // Iterate over stacks of crates to find the stack that matches the instructions

    let correctStack;
    for (let stack of stacksArray) {
        if (stack.id === stackNumber) {
            correctStack = stack;
            return correctStack;
        }
    }
}

// This function identifies the stack where the crates should go

function findArrivalStack(instruction) {
    let arrivalStack = instruction.match(/(to) ([1-9])/);
    let stackNumber = parseInt(arrivalStack[2]);
    
    // Same logic is used to find where the crates need to be moved

    let correctStack;
    for (let stack of stacksArray) {
        if (stack.id === stackNumber) {
            correctStack = stack;
            return correctStack;
        }
    }
}


for (let instruction of instructions) {
    
    // Gather all the necessary data from each line of instructions
    
    let amount = findAmount(instruction);
    let departureStack = findDepartureStack(instruction);
    let arrivalStack = findArrivalStack(instruction);
    
    // Do some console.logs to witness the magic in real time

    console.log(`You need to move ${amount} crates from ${departureStack.id} to ${arrivalStack.id}!`);
    console.log(`Stack ${departureStack.id} is ${departureStack.crates.length} crates high.`);
    
    // There is no instruction to move zero crates, so it's safe to start loop at 1

    for (let i = 1; i <= amount; i++) {

        // Make sure to calculate the new top crate at the start of each loop

        let lastIndex = departureStack.crates.length - 1;
        let topCrate = departureStack.crates[lastIndex];
        arrivalStack.crates.push(topCrate);
        departureStack.crates.pop();
        console.log(`Crate ${topCrate} has been moved from stack number ${departureStack.id} to stack number ${arrivalStack.id}`);
        console.log(`Crate ${topCrate} has been moved to stack number ${arrivalStack.id} and is now ${arrivalStack.crates.length} crates high`);
    }
}

let finalAnswer = '';

// Once all instructions have been processed, get the value of the last index (the highest crate) from each stack of crates

for (let stack of stacksArray) {

    let lastIndex = stack.crates.length - 1;
    let topCrate = stack.crates[lastIndex];
    console.log(`Stack: ${stack.id} Highest crate: ${topCrate}`);
    finalAnswer += topCrate;
}

console.log(`Final Answer: ${finalAnswer}`);

// Answer: QGTHFZBHV