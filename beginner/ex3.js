const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkEvenOdd() {
    rl.question("Enter a number: ", (num) => {
        const number = parseInt(num);
        const result = (number % 2 === 0) ? 'Even' : 'Odd';
        console.log(`The number is: ${result}`);
        rl.close();
    });
}

checkEvenOdd();
