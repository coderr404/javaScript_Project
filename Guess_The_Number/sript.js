const userInput = document.querySelector(".user-input input");
const form = document.querySelector("form");
const showWinner = document.querySelector(".show-winner");
const guessNumber = document.querySelector(".guess-num");
const startGame = document.querySelector(".start-game");
const submit = document.querySelector(".submit");

let random = Math.floor(Math.random() * 20) + 1;
console.log(random);
let allGuessArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log(e)
  const span = document.createElement("span");
  if (userInput.value == random) {
    span.innerText = userInput.value;
    showWinner.innerText = "You got it! Congrats";
    startGame.disabled = false;
    submit.disabled = true;
  } else if (userInput.value < random) {
    showWinner.innerText = "Too hight!";
    span.innerText = userInput.value;
  } else {
    showWinner.innerText = "Too low!";
    span.innerText = userInput.value;
  }
  allGuessArr.push(userInput.value);
  guessNumber.innerText = `Your Guess ${allGuessArr}`;
  userInput.value = "";
});
startGame.addEventListener("click", () => {
  showWinner.innerText = "";
  guessNumber.innerText = "";
  startGame.disabled = true;
  submit.disabled = false;

  random = Math.floor(Math.random() * 20) + 1;
  console.log(random);
});
