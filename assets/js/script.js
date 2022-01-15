// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // Prompt for pasword lengh
  var pwdLgth = Number(window.prompt("Please enter desired length of password", "Select a number between 8 - 128" ));
 
  if (pwdLgth > 8 || pwdLgth < 128) {
    console.log(pwdLgth);
  } else {
    Number(window.prompt("Please enter desired length of password", "Select a number between 8 - 128" ));

    }
      

  console.log(String.fromCharCode(97));

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  // add user prompt for password

  // add password length function 8-128 characters

  // add characters type prompt

  //at least one character tyoe is required to be selected

}

