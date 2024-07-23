const readline = require('readline');

// Create an interface to read from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read input from the user
rl.question('', (input) => {
  // Display the input received
  console.log(`Your name is: ${input}`);

  // Close the readline interface and display the closing message
  rl.close();
  console.log('This important software is now closing');
});
