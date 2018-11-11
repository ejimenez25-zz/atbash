//JS program that creates an encrypted message using the atbash cipher

//The cipher stored in an object
let atBashCipher =
  {'A' : 'Z', 'B' : 'Y', 'C' : 'X', 'D' : 'W', 'E' : 'V',
  'F' : 'U', 'G' : 'T', 'H' : 'S', 'I' : 'R', 'J' : 'Q',
  'K' : 'P', 'L' : 'O', 'M' : 'N', 'N' : 'M', 'O' : 'L',
  'P' : 'K', 'Q' : 'J', 'R' : 'I', 'S' : 'H', 'T' : 'G',
  'U' : 'F', 'V' : 'E', 'W' : 'D', 'X' : 'C', 'Y' : 'B',
  'Z' : 'A'};


//This variable is meant to grab and store the text values


//Function that iterates though the function 'message' variable
function atBash(textEncrypt){
    console.log('yay');
    //Create an empty variable that will store the iteration
    let textEncrypt = document.getElementById('encrypt').value;
    let cipher = '';
    //for in loops though an object's properties names.
    for (let letter in textEncrypt){
      //Conditional statement that adds a letter to 'cipher' if it isn't a space
      //from the cipher object
      console.log('ok, not bad');
      if(letter != ''){
        cipher += atBashCipher.letter;
        console.log(letter);
        //Conditional statement that adds a space if here is a space
      } else {
        cipher += '';
        }
      //Display the result after the iteration
      return cipher;
    }
  }
