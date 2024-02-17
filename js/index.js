// function play() {
//   //step 1 : hide the home screen
//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");
//   //step 2: show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }
function continueGame() {
  //step-1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  console.log("Your random alphabet", alphabet);
  //set randomly generated alphabet
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
