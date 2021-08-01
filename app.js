let p1Score = 0;
let p2Score = 0;
let winningScore = 7;
const showP1Score = document.querySelector("#p1-score");
const showP2Score = document.querySelector("#p2-score");
const p1Button = document.querySelector("#p1-btn");
const p2Button = document.querySelector("#p2-btn");
const resetButton = document.querySelector("#reset-btn");
const settings = document.querySelector("#settings");
const modal = document.querySelector("#modal");
const winnerMessage = document.querySelector("#winner-message");

function resetScores() {
  p1Score = 0;
  p2Score = 0;
  printScores();
  console.log("Scores have been reset.");
}

function printScores() {
  showP1Score.innerText = `${p1Score}`;
  showP2Score.innerText = `${p2Score}`;
  console.log("Scores have been printed to the DOM.");
  if (p1Score === winningScore || p2Score === winningScore) {
    weHaveAWinner();
  }
}

function toggleModal(el) {
  el.classList.toggle("is-active");
}

function weHaveAWinner() {
  winnerMessage.classList.toggle("is-active");
  resetScores();
}

p1Button.addEventListener("click", () => {
  p1Score += 1;
  printScores();
});

p2Button.addEventListener("click", () => {
  p2Score += 1;
  printScores();
});

resetButton.addEventListener("click", () => {
  resetScores();
});

settings.addEventListener("click", () => {
  toggleModal(modal);
});

document.querySelector(".modal-close").addEventListener("click", () => {
  toggleModal(modal);
});

document.querySelector(".modal-background").addEventListener("click", () => {
  toggleModal(modal);
});

document.querySelector("#message-back").addEventListener("click", () => {
  toggleModal(winnerMessage);
});

document.querySelector("#message-close").addEventListener("click", () => {
  toggleModal(winnerMessage);
});

document
  .querySelector("#setting-winning-score")
  .addEventListener("change", (e) => {
    let el = e.target;
    console.log(el.options[el.selectedIndex].value);
    winningScore = parseInt(el.options[el.selectedIndex].value, 10);
    console.log(`winning score is now set to ${winningScore}`);
    resetScores();
  });
