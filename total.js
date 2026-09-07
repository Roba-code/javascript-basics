const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a positive number: ', (num) => {
    const number = Number(num);
    if (!Number.isInteger(number) || number <= 0) {
        console.log('Please enter a valid positive integer.');
        rl.close();
    } else {
        let total = 0;
        for (let i = 1; i <= number; i++) {
            total += i;
        }
        console.log(`The total is: ${total}`);
        rl.close();
    }
});