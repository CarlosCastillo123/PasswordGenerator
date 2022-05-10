// Assignment Code
var generateBtn = document.querySelector("#generate");{

}

// Write password to the #password input
function generatePassword() {
var password = '';
var avaliableChar = '';
var uCase = 'AFGHIJKLMNOPQRSTUVWXYZ'
var lCase = 'abcdefghijklmnopqrstuvwxyz'
var numbers = '0123457689'
var sChar =  '%^&*+#@!'
var passLength = prompt('Chose a password length between 8 and 128.')
if (passLength >= 8 && passLength <= 128) {
  console.log (passLength)
}
else {
  alert("Your password must be between 8 and 128 characters")
  return "";
}
var queryuCase = confirm('Do you want to use upper case letters in your password?')


var querylCase = confirm('Do you want to use lower case letters in your password?')


var querynumbers = confirm('Do you want to use numbers in your password?')


var querysChar = confirm('Do you want to use special characters in your password?')

if (querylCase) {
  avaliableChar += lCase
}
if (queryuCase) {
  avaliableChar += uCase
}
if (querynumbers) {
  avaliableChar += numbers
}
if (querysChar) {
  avaliableChar += sChar
}
if (!querylCase && !queryuCase && !querynumbers && !querysChar) 
{
  return alert("Please select at least one")
}
for (let i = 0; i < passLength; i++) {
  password += avaliableChar[Math.floor(Math.random () * avaliableChar.length)]
}
return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
