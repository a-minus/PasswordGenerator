// Assigning variable to id="generate", when clicked this will run the writePassword function
const $generateBtn = document.querySelector("#generate");
$generateBtn.addEventListener("click", writePassword);

// Write password to id="password"
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Assigning variable to id="copy",  when clicked this will run the copyPassword function
const $copyBtn = document.querySelector("#copy");
$copyBtn.addEventListener("click", copyPassword);

// Copy existing text in password generating box, via id="password"
function copyPassword() {
  let passwordText = document.querySelector("#password");
  passwordText.select();
  document.execCommand('copy');
}

// Function that generates all needed elements for writing a random password
function generatePassword() {

  // Arrays that will be randomly shuffled
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "~`!@#$%^&*()_-+=[]';:?";

  // Buffer variables as a location for random passwords to be held
  let randomPassword = "";
  let finalPassword = "";

  // Makes the user input password length turn into a number, versus a string
  const passLength = parseInt(document.getElementById("passLength").value);

  // Is lowercase checkbox activated
  if (document.getElementById("lowerBox").checked) {
    for (i = 0; i < passLength; i++) {
      randomPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }
  }

  // Is uppercase checkbox activated
  if (document.getElementById("upperBox").checked) {
    for (i = 0; i < passLength; i++) {
      randomPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    }
  }

  // Is numbers checkbox activated
  if (document.getElementById("numbersBox").checked) {
    for (i = 0; i < passLength; i++) {
      randomPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  }

  // Is uppercase checkbox activated
  if (document.getElementById("symbolsBox").checked) {
    for (i = 0; i < passLength; i++) {
      randomPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
  }

  // Randomizes the various checkboxes compiled password, also sets length
  for (i = 0; i < passLength; i++) {
    finalPassword += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
  }

  // Sets password length requirement
  if (passLength < 8 || passLength > 128) {
    finalPassword = "Password must be between 8 and 128 characters";
  }

  // Final result of what running the function will produce
  return finalPassword;

// Closing tag for generatePassword function  
}