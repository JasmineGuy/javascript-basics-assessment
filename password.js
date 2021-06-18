const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to Password Validator! What's your password?", function(answer) {
    console.log("Validating " + answer);
    
    if( answer.length > 10 ) {
        console.log(answer + " is a successful password")
    } else {
        console.log(answer + " is an unsuccessful password")
    }
  });
