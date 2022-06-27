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

function generatePassword(){
  // PsuedoCode
  // PROMPT - User Input
 
  if (generateBtn) {
    var userInput =[];
  for(var i = 0; i < 1; i++) {
    userInput.push(prompt("How many characters do you want in your password?"), confirm("Include special characters?"), confirm("Include Upper characters?"))
  }
  };
  console.log(userInput);
  // Works, nex step------------------------------------------------------------
  var array1 = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
  var array2 = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
  var array3 = ["1","2","3","4","5","6","7","8","9","0"]
  var array4 = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","|","]","}","[","{","'",";",":","/","?",".",">",",","<"]
  // --------------------------------------------------------------------------------

  if (userInput[0] && userInput[1] && userInput[2]) {
    var userInputProcessed = array1.concat(array2, array3,array4);
  } else if (!userInput[1] && !userInput[2]) {
    var userInputProcessed = array1.concat(array3);
  } else if (!userInput[1]) {
    var userInputProcessed = array1.concat(array2, array3);
  } else if (!userInput[2]) {
    var userInputProcessed = array1.concat(array3,array4);
  };
  console.log(userInputProcessed)
  // -----------------------------------------------------------------------------------
  var password =[];
  for(var i = 0; i < userInput[0]; i++) {
    password.push(userInputProcessed[Math.floor(Math.random() * userInputProcessed.length)]);
  };
  console.log(password)
  // ---------------------------------------------------------
 
  
  // prompt = length
    // let pwdLength = prompt("how many characters")
    // console.log(pwdLength)
  // confirm - lowercase, uppercase, numeric, special characters
    // let numbers  =  confirm("DO you want numbers");
      // console.log(numbers);
  // create var to hold anser to prompt/confirm 
  // function to validate user answrs
  // if and equalaity operators 
   // if(numbers){

  //  } 

  // List of numbers, special chars, uppercase and lowercase
    // array
    // combine all arrays in 1 array
    // Randomly choose characters
    // create a string set equal to password var
    // array method to check if something is in array
  // generate random password
  // return password
  
  return password;
}




