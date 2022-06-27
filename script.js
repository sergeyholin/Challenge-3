// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ----------------------------------------My Code---------------------------------------------------
function generatePassword(){
  // PROMPT - User Input-----------------------------------------------------------------------------
  if (generateBtn) {
    var userInput =[];
  for(var i = 0; i < 1; i++) {
    userInput.push(prompt("How many characters do you want in your password?", "8 - 128 characters"), confirm("Include special characters?"), confirm("Include upper case characters?"), confirm("Include lower case characters?"), confirm("Include numbers?"))
  }
  };
  console.log(userInput);
  //Arrays--------------------------------------------------------------------------------------------
  var array1 = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","|","]","}","[","{","'",";",":","/","?",".",">",",","<"]
  var array2 = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
  var array3 = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
  var array4 = ["1","2","3","4","5","6","7","8","9","0"]
  //Conditional statements----------------------------------------------------------------------------
  // T T T T
  if (userInput[0] && userInput[1] && userInput[2] && userInput[3] && userInput[4]) {
    var userInputProcessed = array1.concat(array2, array3,array4); 
  // T F T F
  } else if (userInput[0] && userInput[1] && !userInput[2] && userInput[3] && !userInput[4]) {
    var userInputProcessed = array1.concat(array3);
  } 
  // F F T T
  else if (userInput[0] && !userInput[1] && !userInput[2] && userInput[3] && userInput[4]) {
    var userInputProcessed = array3.concat(array4);
  } 
  // F T F T
  else if (userInput[0] && !userInput[1] && userInput[2] && !userInput[3] && userInput[4]) {
    var userInputProcessed = array2.concat(array4);
  } 
  // T T F F
  else if (userInput[0] && userInput[1] && userInput[2] && !userInput[3] && !userInput[4]) {
    var userInputProcessed = array1.concat(array2);
  } 
  // T F F F
  else if (userInput[0] && userInput[1] && !userInput[2] && !userInput[3] && !userInput[4]) {
    var userInputProcessed = array1;
  } 
  // F T T T
  else if (userInput[0] && !userInput[1] && userInput[2] && userInput[3] && userInput[4]) {
    var userInputProcessed = array2.concat(array3, array4);
  } 
  // F T F F
  else if (userInput[0] && !userInput[1] && userInput[2] && !userInput[3] && !userInput[4]) {
    var userInputProcessed = array2;
  } 
  // T F T T
  else if (userInput[0] && userInput[1] && !userInput[2] && userInput[3] && userInput[4]) {
    var userInputProcessed = array1.concat(array3, array4);
  } 
  // F F T F
  else if (userInput[0] && !userInput[1] && !userInput[2] && userInput[3] && !userInput[4]) {
    var userInputProcessed = array3;
  } 
  // T T F T
  else if (userInput[0] && userInput[1] && userInput[2] && !userInput[3] && userInput[4]) {
    var userInputProcessed = array2.concat(array1, array4);
  } 
  // F F F T
  else if (userInput[0] && !userInput[1] && !userInput[2] && !userInput[3] && userInput[4]) {
    var userInputProcessed = array4;
  } 
  else if (userInput[0] && !userInput[1] && userInput[2] && userInput[3] && userInput[4]) {
    var userInputProcessed = array2.concat(array3, array4);
  } 
  // T T T F
  else if (userInput[0] && userInput[1] && userInput[2] && userInput[3] && !userInput[4]) {
    var userInputProcessed = array2.concat(array3, array1);
  } 
  // F F F F
  else if (userInput[0] && !userInput[1] && !userInput[2] && !userInput[3] && !userInput[4]) {
    var userInputProcessed = 0;
  } 
  console.log(userInputProcessed)
  //Randomizing input results ------------------------------------------------------------------------
  var results =[];
  for(var i = 0; i < userInput[0]; i++) {
    results.push(userInputProcessed[Math.floor(Math.random() * userInputProcessed.length)]);
  };
  // Turning comma seperated characters into one word blob--------------------------------------------
  var password = results.join("")
  console.log(password)

  return password;
}




