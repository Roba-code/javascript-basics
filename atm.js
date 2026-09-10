const accountHolder = "Robert"
let balance = 50000;
const pin = 1234;
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Please enter your PIN: ', (inputPin) => {
  if (Number(inputPin) === pin) {   
        console.log(`Welcome ${accountHolder}`);
         console.log('1. Check balance');
        console.log('2. Deposit');
        console.log('3. Withdraw');
        console.log('4. Exit');
        rl.question('Please select an option: ', (option) => {
          if (option === '1') {
            console.log(`Your balance is: ${balance}`);
            
          }else if (option === '2') {
            rl.question('Enter amount to deposit: ', (depositAmount) => {
              const amount = Number(depositAmount);
              if (amount > 0) {
                const newBalance = balance + amount;
                console.log(`Deposit successful. New balance is: ${newBalance}`);
              } else {
                console.log('Invalid deposit amount.');
              }
              
            });
          }else if (option === '3') {
            rl.question('Enter amount to withdraw: ', (withdrawAmount) => {
              const amount = Number(withdrawAmount);
              if (amount > 0 && amount <= balance) {
                const newBalance = balance - amount;
                console.log(`Withdrawal successful. New balance is: ${newBalance}`);
              } else {
                console.log('Invalid withdrawal amount.');
              }
              
            });
          }else if (option === '4') {
            console.log('Thank you for using the ATM.');
            rl.close();
          } else {
            console.log('Invalid option.');
            rl.close();
          }
        });
  }else {
    console.log('Incorrect PIN. Access denied.');
    rl.close();
  }

});

