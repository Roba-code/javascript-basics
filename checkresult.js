const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const checkResult = (mark) => {
    if (mark >= 50){
        return "pass";
    }
     return "Fail";
};
rl.question('enter student name', (name) => {
    rl.question('enter student mark', (mark) => {
        const marks=Number(mark);
        const result = checkResult(marks);
        console.log (`${name}: ${result}`);
        rl.close();
    });
});