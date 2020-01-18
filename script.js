// Assigning variable to id="generate", when clicked this will run the writePassword function
const $generateBtn = document.querySelector("#generate");
$generateBtn.addEventListener("click", writePassword);

// Write password to id="password"
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
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
  const lowerBox = document.querySelector('#lowerBox')
  const upperBox = document.querySelector('#upperBox')
  const numbersBox = document.querySelector('#numbersBox')
  const symbolsBox = document.querySelector('#symbolsBox')

  // Arrays that will be randomly shuffled
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "~`!@#$%^&*()_-+=[]';:?";
  const validators = []
  let isValid = true

  // Buffer variables as a location for random passwords to be held
  let passwordOptions = "";
  let finalPassword = "";

  // Makes the user input password length turn into a number, versus a string
  const passLength = parseInt(document.getElementById("passLength").value);
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 and 128 characters")
    return
  }

  // Validate that each criterion user requested appear at least once in the final password
  if (lowerBox.checked) {
    passwordOptions += lowerCase
    validators.push(/[a-z]/)
  }
  if (upperBox.checked) {
    passwordOptions += upperCase
    validators.push(/[A-Z]/)
  }
  if (numbersBox.checked) {
    passwordOptions += numbers
    validators.push(/[0-9]/)
  }
  if (symbolsBox.checked) {
    passwordOptions += symbols
    validators.push(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\'\;\:\?]/)
  }

  while (finalPassword.length < passLength) {
    finalPassword += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
  }

  validators.forEach((validator) => {
    if (!isValid) {
      return
    }
    if (!validator.exec(finalPassword)) {
      isValid = false
    }
  })

  // Final result of what running the function will produce
  return isValid ? finalPassword : generatePassword()

// Closing tag for generatePassword function
}
