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
  currentWord = words[Math.floor(Math.random()*words.length)];
  currentLettersInWord = currentWord.split("");
  underscore = currentLettersInWord.length;
  console.log(currentWord);
  underscoreArray = [];
  wrongGuessed = [];
  console.log(currentLettersInWord);
  for(let i = 0; i < underscore; i++ ){
    underscoreArray.push("_");
  }
console.log(underscoreArray);
document.getElementById("guessesLeft").innerHTML=guessCount;
document.getElementById("wordBlank").innerHTML=underscoreArray.join(" ");
document.getElementById("wrongGuess").innerHTML=wrongGuessed.join(" ");






}
 startGame();

