// Assignment code here

var characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", 
 "~!@#$%^&*()-_=+"];

var userInput = "";

var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.value = ''; 
}

// Character length prompt
function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === 
false) {
  characterLength = parseInt(prompt(`How log would you like your password to be? (8 
128)`));
  }

  var upper = false
  var lower = false
  var number = false
  var symbol = false

  while (true) {
    // Uppercase pop up
    upper = confirm("Click OK to confirm uppercase characters");

    // Lowercase pop up
    lower = confirm("Click OK to confirm lowercase characters");

    // Numeric pop up
    number = confirm("Click OK to confirm numeric characters");

    // Special charcter  pop up
    symbol = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");

    break;
  }

  console.log('Using upper', upper);
  console.log('Using lower', lower);
  console.log('Using number', number);
  console.log('Using symbol', symbol);

  upper && (userInput += characters[0])

  lower && (userInput += characters[1])

  number && (userInput += characters[2])

  symbol && (userInput += characters[3])

  var password = "";

  for (var i = 0; i < characterLength; i++) {
    var index = Math.floor(Math.random() * userInput.length);
    password += userInput[index]
  }

  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
