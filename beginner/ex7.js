const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels() {
    rl.question("Enter a string: ", (str) => {
        const vowelCount = str.match(/[aeiouAEIOU]/g)?.length || 0;
        console.log(`Vowel Count: ${vowelCount}`);
        rl.close();
    });
}

countVowels();

