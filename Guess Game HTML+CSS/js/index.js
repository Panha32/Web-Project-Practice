let nbGuess = 10;
let value = Math.floor(Math.random() * 100) + 1;
const button = document.querySelector(".submit");
const input = document.querySelector("#number");
const hint = document.querySelector(".hint");
const result = document.querySelector(".result");
const remaining = document.querySelector(".remaining");
const remVal = document.querySelector(".rem-val");
const allguesses = document.querySelector(".all");
const prediction = document.querySelector("#predict");
const replayButton = document.querySelector(".btn-replay");
const range = document.querySelector("#min-max");
const cheer = document.querySelector(".cheering");

cheer.style.display = "none";

function updateHint(guess, value) {
  if (guess < value) {
    hint.textContent = "Hint : higher";
    hint.style.color = "purple";
    allguesses.style.color = "purple";
  } else {
    hint.textContent = "Hint : lower";
    hint.style.color = "purple";
    allguesses.style.color = "purple";
    input.value = "";
  }
}

function resetGame() {
  nbGuess = 8;
  value = Math.floor(Math.random() * 100) + 1;
  hint.textContent = "";
  result.textContent = "";
  remVal.textContent = nbGuess;
  allguesses.textContent = "";
  input.value = "";
  button.disabled = false;
  button.style.background = "";
  replayButton.style.display = "none";
  //   --
  input.style.display = "";
  button.style.display = "";
  hint.style.display = "";
  remaining.style.display = "";
  allguesses.style.display = "";
  prediction.style.display = "";
  range.style.display = "";
  cheer.style.display = "none";
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = parseInt(input.value, 10);
  if (nbGuess !== 1 && guess !== value) updateHint(guess, value);
  else if (nbGuess === 1 && guess !== value) {
    result.textContent = "Stupid Guy!!!";
    result.style.color = "red";
    button.disabled = true;
    button.style.background = "grey";
    replayButton.style.display = "block";
    // hide elements
    input.style.display = "none";
    button.style.display = "none";
    hint.style.display = "none";
    remaining.style.display = "none";
    allguesses.style.display = "none";
    prediction.style.display = "none";
    range.style.display = "none";
    cheer.style.display = "none";
  } else {
    result.textContent = "Smart Guy!!!";
    result.style.color = "rgb(10, 246, 10)";
    button.disabled = true;
    button.style.background = "grey";
    replayButton.style.display = "block";
    // hide elements
    input.style.display = "none";
    button.style.display = "none";
    hint.style.display = "none";
    remaining.style.display = "none";
    allguesses.style.display = "none";
    prediction.style.display = "none";
    range.style.display = "none";
    cheer.style.display = "";
  }
  nbGuess--;
  remVal.textContent = nbGuess;
  if (guess) allguesses.textContent += guess + ", ";
  input.value = "";
});
