const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissors-btn");
const userHand = document.querySelector(".user.hand-icon");
const computerHand = document.querySelector(".computer.hand-icon");
const result = document.querySelector(".result");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");

const rockIcon = "✊";
const paperIcon = "✋";
const sicessoIcon = "✌️";
const userShake = "🤜";
const computerShake = "🤛";
const computerChoice = [rockIcon, paperIcon, sicessoIcon];
let uScore = 0;
let cScore = 0;

rockBtn.addEventListener("click", () => {
  calculateResult(rockIcon, sicessoIcon);
});

paperBtn.addEventListener("click", () => {
  calculateResult(paperIcon, rockIcon);
});

scissorBtn.addEventListener("click", () => {
  calculateResult(sicessoIcon, paperIcon);
});

function calculateResult(icon, winning) {
  result.innerText = "";
  userHand.innerText = userShake;
  computerHand.innerText = computerShake;
  userHand.classList.add("shakeUserHands");
  computerHand.classList.add("shakeComputerHands");

  setTimeout(() => {
    userHand.classList.remove("shakeUserHands");
    userHand.innerText = icon;
    computerHand.classList.remove("shakeComputerHands");
    const random = Math.round(Math.random() * 2);
    computerHand.innerText = computerChoice[random];

    if (userHand.innerText == computerHand.innerText) result.innerText = "draw";
    else if (computerHand.innerText == winning) {
      result.innerText = "you won";
      uScore++;
      userScore.innerText = uScore;
    } else {
      result.innerText = "computer won";
      cScore++;
      computerScore.innerText = cScore;
    }
  }, 2000);
}
