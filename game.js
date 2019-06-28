//set word array//
let words = ["saturn", "voyager","asteroid","neptune", "constellation", "astronomer", "equinox"];

let currentWord = "";

let currentLettersInWord = [];

let underscore = 0;

let underscoreArray = [];

let wrongGuessed = [];

let winCount = 0;
let lossCount = 0;
let guessCount = 9;

let startGame = function(){
  guessCount = 9;
  //choose random word to be guessed//
  currentWord = words[Math.floor(Math.random()*words.length)];
  currentLettersInWord = currentWord.split("");

  //create underscore length based on random word//
  underscore = currentLettersInWord.length;
  console.log(currentWord);
  underscoreArray = [];
  wrongGuessed = [];
  console.log(currentLettersInWord);
  for(let i = 0; i < underscore; i++ ){
    underscoreArray.push("_");
  }
console.log(underscoreArray);
//display number of guesses left//
document.getElementById("guessesLeft").innerHTML=guessCount;

//display user letter choosen by user//
document.getElementById("wordBlank").innerHTML=underscoreArray.join(" ");

//display users wrong letter answer//
document.getElementById("wrongGuess").innerHTML=wrongGuessed.join(" ");






}
 startGame();



//get users letter guessed when key is pressed//




})
//check if answer is right//

//tell user if answer is correct//