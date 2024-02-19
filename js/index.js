// function play() {
//   //step 1 : hide the home screen
//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");
//   //step 2: show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");

// }
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  console.log("player pressed", playerPressed);

  //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const pressedAlphabet = currentAlphabetElement.innerText.toLocaleLowerCase();
  console.log(playerPressed, pressedAlphabet);
  //check the right or wrong key pressed
  if (playerPressed === pressedAlphabet) {
    console.log("you got a point");
    removeBackgroundColorById(pressedAlphabet);
    continueGame();
  } else {
    console.log("please press the right key");
  }
}
//capturing keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

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
