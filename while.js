const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter a positive integer: ', (num) => {
    const number = Number(num); 
    if (!Number.isInteger(number) || number <= 0) {
        console.log('Please enter a valid positive integer.');
        rl.close();
    } else {
        i = 1;
        while (i <= number) {
            console.log(i);
            i++;
        }   
        rl.close();
    }
});