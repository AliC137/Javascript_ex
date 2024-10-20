const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertCelsius() {
    rl.question("Enter temperature in Celsius: ", (celsius) => {
        const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
        console.log(`Temperature in Fahrenheit: ${fahrenheit}`);
        rl.close();
    });
}

convertCelsius();

