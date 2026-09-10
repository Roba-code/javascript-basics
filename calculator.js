const readline = require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout

})
const addNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
rl.question('please enter firstNumber', (input) =>{
    const firstNumber = Number(input);
    rl.question('enter secondNumber', (inputNumber) => {
    const secondNumber = Number(inputNumber);
    const result = addNumbers(firstNumber, secondNumber);
    console.log(result);
    rl.close();
    });

});
