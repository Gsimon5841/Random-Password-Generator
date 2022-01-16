// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt for pasword length
  var pwdLgth = Number(window.prompt("Please enter desired length of password." + " Select a number between 8 - 128"));
  while (pwdLgth < 8 || pwdLgth > 128) {
    window.alert("Please enter a number between 8 and 128");
    pwdLgth = Number(window.prompt("Please enter desired length of password." + " Select a number between 8 - 128"));


  }
  if (pwdLgth > 8 || pwdLgth < 128) {
    window.alert("Thank you!");
    console.log(pwdLgth);

  }

  //charUpper
  var charUpper = confirm("Do you want your password to have capital letters? OK for YES and Cancel for NO.")

  //charLower
  var charLower = confirm("Do you want your password to have lowercase letters? OK for YES and Cancel for NO.")

  //charNum
  var charNum = confirm("Do you want your password to have numbers? OK for YES and Cancel for NO.")

  //charSpecial
  var charSpecial = confirm("Do you want your password to have special characters? OK for YES and Cancel for NO.")
  var pwdString = ""

  for (; pwdString.length < pwdLgth;) {
    var rdmNum = Math.floor((Math.random() * 4 + 1))
    if (rdmNum == 1) {
      if (charUpper == true) {
        pwdString += (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
      }
    } else if (rdmNum == 2) {
      if (charLower === true) {

        pwdString += (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
      }
    } else if (rdmNum == 3) {
      if (charNum == true) {

        pwdString += (String.fromCharCode(Math.floor(Math.random() * 9) + 48));
      } else if (rdmNum == 4) {
        if (charSpecial == true) {

          pwdString += (String.fromCharCode(Math.floor(Math.random() * 15) + 33));
        }
      }
    }
    console.log(pwdString.length)
    return pwdString
  }

}
// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}