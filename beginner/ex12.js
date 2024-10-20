const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomNumber() {
    rl.question("Enter minimum value: ", (min) => {
        rl.question("Enter maximum value: ", (max) => {
            const minValue = parseInt(min);
            const maxValue = parseInt(max);
            const random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            console.log(`Random Number: ${random}`);
            rl.close();
        });
    });
}

generateRandomNumber();
