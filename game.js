//set word array//
let words = ["saturn", "voyager", "asteroid", "neptune", "constellation", "astronomer", "equinox", "comet", "moon", "star", "andromeda"];

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
}
console.log(underscoreArray);
//display number of guesses left//
document.getElementById("guessesLeft").innerHTML=guessCount;

//display user letter choosen by user//
document.getElementById("wordBlank").innerHTML=underscoreArray.join(" ");

//display users wrong letter answer//
document.getElementById("wrongGuess").innerHTML=wrongGuessed.join(" ");

 
//comparing user clicked to letter in word//
function checkUserLetter(letter){
  let letterInWord= false;
  for (let i = 0; i < underscore; i++){
    if(currentWord[i] === letter){
      letterInWord = true;
    }
  }
  if(letterInWord){
    for(let j =0; j < underscore; j++){
      if(currentWord[j] === letter){
        underScoreArray[j] = letter;
      }
    }
  }else{
    guessCount--;
    wrongGuessed.push(letter);
  }
}

function roundComplete(){
   document.getElementById("guessesLeft").innerHTML=guessCount;
   document.getElementById("wordBank").innerHTML=underscoreArray.join(" ");
   document.getElementById("wrongGuess").innerHTML=wrongGuessed.join(" ");
  if(currentLettersInWord.toString()===underscoreArray.toString()){
    winCount++;
    alert("Congrats!")
    document.getElementById("winCount").innerHTML=winCount;
    startGame();
  }else if(guessCount===0){
    lossCount++;
    alert("try again!")
    document.getElementById("lossCount").innerHTML=lossCount;
    startGame();
  }
}

startGame();
document.onkeyup = function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90){
    let textContent=event.key.toLowerCase();
    console.log(textContent); 
    checkUserLetter(textContent);
    roundComplete();
  }
}