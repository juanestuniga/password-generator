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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
