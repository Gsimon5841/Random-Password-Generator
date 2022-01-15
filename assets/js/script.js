// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  // Prompt for pasword length
  var pwdLgth = Number(window.prompt("Please enter desired length of password" + " Select a number between 8 - 128"));
  while (pwdLgth < 8 || pwdLgth > 128) {
    window.alert("Please enter a number between 8 and 128");
    pwdLgth = Number(window.prompt("Please enter desired length of password." + " Select a number between 8 - 128"));
    
    
  }
  if (pwdLgth > 8 || pwdLgth < 128) {
    window.alert("Thank you!");
    console.log(pwdLgth);
    
  }
  
  //charUpper
  var charUpper = confirm("Do you want your password to have capital letters? OK for yes and Cancel for no.")
  var charLower = confirm("Do you want your password to have lowercase letters? OK for yes and Cancel for no.")
  var charNum = confirm("Do you want your password to have numbers? OK for yes and Cancel for no.")
  var charSpecial = confirm("Do you want your password to have special characters? OK for yes and Cancel for no.")
  var pwdString = ""
if ( charUpper === true) {
   
   console.log(String.fromCharCode(Math.floor(Math.random() * 26) +65) );
}

//charLower


//charSpecial

}
// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  // add user prompt for password

  // add password length function 8-128 characters

  // add characters type prompt

  //at least one character tyoe is required to be selected

}