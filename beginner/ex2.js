const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString() {
    rl.question("Enter a string: ", (str) => {
        const reversed = str.split('').reverse().join('');
        console.log(`Reversed String: ${reversed}`);
        rl.close();
    });
}

reverseString();
