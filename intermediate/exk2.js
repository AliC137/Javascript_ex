const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateEmail() {
    rl.question("Enter an email address: ", (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        console.log(`Is valid email: ${isValid}`);
        rl.close();
    });
}

validateEmail();

