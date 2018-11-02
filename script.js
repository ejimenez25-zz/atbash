// JS program to implement AtBash cipher
  
//Object that holds key:value pair
let atBashCipher = {
  'A' : 'Z', 'B' : 'Y', 'C' : 'X', 'D' : 'W', 'E' : 'V', 
        'F' : 'U', 'G' : 'T', 'H' : 'S', 'I' : 'R', 'J' : 'Q', 
        'K' : 'P', 'L' : 'O', 'M' : 'N', 'N' : 'M', 'O' : 'L', 
        'P' : 'K', 'Q' : 'J', 'R' : 'I', 'S' : 'H', 'T' : 'G', 
        'U' : 'F', 'V' : 'E', 'W' : 'D', 'X' : 'C', 'Y' : 'B', 'Z' : 'A'
} 


let message = document.getElementByID('text');

//declaring a function that takes the message
function atBash(message){
    //Create an empty variable that will store the iteration
    let cipher = ''; 
    //for in loops though properties in an object in this case the user message
    for (let letter in message){
      //Conditional statement that adds a letter to 'cipher' if it isn't a space
      if(letter != ''){
        cipher += atBashCipher[letter];
        //Conditional statement that adds 
      } else {
        cipher += '';
      }
      return cipher;
    } 
 
  
//Function that makes the program run. 
function encrypt(){
  message = 'GEEKS FOR GEEKS';
  console.log(atBash(message.upperCase()));
  
  message = 'TVVPH ULI TVVPH';
  console.log(atBash(message.upperCase()));
} 
  
  
  
