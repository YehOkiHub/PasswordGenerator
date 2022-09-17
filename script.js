// Assignment Code
var generateBtn = document.querySelector("#generate");


var passList = []
var symBols = ["!", "@", "#", "￥", "%", "^", "&", "*"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numBers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upperCase = []

for(var i = 0; i < lowerCase.length; i++)
   upperCase[i] = lowerCase[i].toUpperCase()

function generatePassword(){

 var userInput = window.prompt("Whats the length of your password?")
 var passLength = parseInt(userInput)

 if(isNaN(passLength) || passLength < 8 || passLength > 128) {
   window.alert("You must input a number between 8 and 128")
   return;
 
 }

 if(passLength > 8 || passLength < 128){

  var conLower = window.confirm("Would you want Lowercase letters?");
  var conUpper = window.confirm("Would you want Upper letters?");
  var conSymbol = window.confirm("Would you want Symbols?");
  var conNum = window.confirm("Would you want Numbers?");

 }

 if(conLower === true) {
  
   passList.push(lowerCase);

 }
 if(conUpper === true) {
  
  passList.push(upperCase);

}
if(conSymbol === true) {
  
  passList.push(symBols);

}
if(conNum === true) {
  
  passList.push(numBers);

}

if(conLower === false && conUpper === false && conSymbol === false && conNum === false){

  window.alert("Please choose at least one character type!");
}

for(var i = 0; i < passList.length; i++){

 

 
}

}



 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











// // Assignment Code
// var generateBtn = document.querySelector("#generate");



//   function generatePassword() {

//     var userInput = window.prompt("Choose your password Length")
//     var passLength = parseInt(userInput)





//    if (isNaN(passLength)) {
//     window.alert("You must input a number")
//     return
//  }
  
//    if (passLength < 8 || passLength > 128){

//   window.alert("Password length must be between 8-128 letters")
//   return
//  }

  //  var conLower = window.confirm("Would you want Lowercase letters?")
  //  var conUpper = window.confirm("Would you want Upper letters?")
  //  var conSymbol = window.confirm("Would you want Symbols?")
  //  var conNum = window.confirm("Would you want Numbers?")

  //  var Symbols = ["!", "@", "#", "￥", "%", "^", "&", "*"]
  //  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  //  var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  //  var upperCase = []

  //  for(var i = 0; i < lowerCase[i].length; i++)
  //  upperCase[i] = lowerCase[i].toUpperCase()


//   var finalPass = ""

//    if(conLower === true){

//   finalPass.push(lowerCase);
//  }

//  if(conUpper === true){
//   finalPass.push(upperCase);

//  if(conSymbol === true){

//   finalPass.push(conSymbol);

//  if(conNum === true){
//   finalPass.push(Numbers);




//  }

// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
