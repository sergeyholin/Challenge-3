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
    userInput.push(prompt("How many characters do you want in your password?"), confirm("Include special characters?"), confirm("Include upper and lower characters?"))
  }
  };
  console.log(userInput);
  // Works, nex step------------------------------------------------------------
  var arr0 = [4, true, true]
  var arr1 = ["q", "w", "e", "r","t"];
  var arr2 = ["Q", "W", "E", "R", "T"];
  var arr3 = [1,2,3,4,5]
  var arr4 = ["~", "!", "#", "$", "@"]

  if (arr0) {
    var userInputProcessed = arr1.concat(arr2, arr3,arr4);

  };
  console.log(userInputProcessed)
  
  var results =[];
  for(var i = 0; i < arr0[0]; i++) {
    results.push(userInputProcessed[Math.floor(Math.random() * userInputProcessed.length)]);
  };
  console.log(results)
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