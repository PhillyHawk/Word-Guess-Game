//set word array//
let word = ["saturn", "voyager", "asteroid", "neptune", "constellation", "astronomer", "equinox", "comet", "moon", "star", "andromeda"];

//choose word randomly
let randWord = Math.floor(Math.random() * word.length);
let currentWord = word[randWord];
let rightWord = [];
let wrongWord = [];
let underScore = [];
console.log(currentWord);

//create underscore based on lenght of word
 let generateUnderscore = () => {
   for(let i = 0; i < currentWord.length; i++){
     underScore.push("_");
    }
   return underScore;
 }
 console.log(generateUnderscore());
 document.addEventListener('keypress', (event) => {
   let keyword = String.fromCharCode(event.keycode);
   //if user guess is right
    if(currentWord.indexOf(keyword) > -1){
      rightWord.push(keyword);
      console.log(rightWord);
    }else{
      wrongWord.push(keyword);
      console.log(wrongWord);
    }
 });
//get user guest
//check if guess is right
//if right push right array
//if wrong push to wrong array