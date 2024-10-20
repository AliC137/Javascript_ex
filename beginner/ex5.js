const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findLargest() {
    rl.question("Enter an array of numbers separated by commas: ", (input) => {
        const numbers = input.split(',').map(Number);
        const largest = Math.max(...numbers);
        console.log(`Largest number: ${largest}`);
        rl.close();
    });
}

findLargest();
