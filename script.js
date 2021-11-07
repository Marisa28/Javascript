// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var passwordLength = 12;
  // var password = "";
  let chars;
  let passwordLength;
  let password;
  let lower;
  let upper;
  let symbols;
  let number;
  console.log ("In the beginning chars = ", chars);
  passwordLength = parseInt(prompt ("What should be the password length? (valid values 8 to 128)"));
  if (Number.isNaN(passwordLength)) {
    alert("password length has to be a number between 8 and 128. Please try again");
    return;
  }
  console.log ("passwordLength", passwordLength);
lower = confirm("Do you want to include lower case characters in the generated password? Press OK to include, Cancel to exclude:");
console.log("lower case to be include = ", lower);
let lc = "abcdefghijklmnopqrstuvwxyz";
if (lower === true) {
 // chars = chars + lc;
  chars += lc;
}
console.log ( "after lower choice is made, chars = ", chars);

upper = confirm("Do you want to include upper case characters in the generated password? Press OK to include, Cancel to exclude:");
console.log("upper case to be include = ", upper);
let lc = "abcdefghijklmnopqrstuvwxyz";
if (lower === true) {
 // chars = chars + lc;
  chars += lc;
}
console.log ( "after lower choice is made, chars = ", chars);

symbols= confirm("Do you want to include symbols characters in the generated password? Press OK to include, Cancel to exclude:");
console.log(" symbols to be include = ", symbols);

numbers = confirm("Do you want to include numbers characters in the generated password? Press OK to include, Cancel to exclude:");
console.log("numbers to be include = ", numbers);
  

for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
      document.getElementById("password").value = password;
}

function copyPassword() {
var copyText = document.getElementById("password");
copyText.select();
document.execCommand("copy");  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);