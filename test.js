const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});
rl.question('Enter your username: ', function(username) {

if (username) {
    console.log(`Welcome ${username}`);
} else {
    console.log("Please enter a username.");
}
rl.close();
});