const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumNumbers() {
    rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            
            if (!isNaN(number1) && !isNaN(number2)) {
                const sum = number1 + number2;
                console.log(`Sum: ${sum}`);
            } else {
                console.log('Please enter valid numbers.');
            }
            rl.close();
        });
    });
}

sumNumbers();

