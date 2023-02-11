document.addEventListener("DOMContentLoaded", function() {
const arrows = document.querySelectorAll(".arrow");
const result = document.querySelector("#result");
const chances = document.querySelector("#chances");
const goals = document.querySelector("#goals");
const misses = document.querySelector("#misses");
const power = document.querySelector("#power");
const restartButton = document.querySelector("#restartButton");
let totalChances = 5;
let totalGoals = 0;
let totalMisses = 0;

arrows.forEach(arrow => {
arrow.addEventListener("mousedown", e => {
startTime = new Date();
});
arrow.addEventListener("mouseup", e => {
endTime = new Date();

function getRandomDirection() {
const directions = ["left", "center", "right"];
let randomIndex = Math.floor(Math.random() * directions.length);
return directions[randomIndex];
}

let shotPower = (endTime - startTime) / 1000;
let userChoice = e.target.alt;
let goalkeeperChoice = getRandomDirection();
result.innerHTML = `You shot ${userChoice}. The goalkeeper jumped ${goalkeeperChoice}.`;

if (shotPower < 0.3) {
misses.innerHTML = `Misses: ${++totalMisses}`;
result.innerHTML += " Under power. Miss.";
} else if (shotPower <= 1) {
if (userChoice === goalkeeperChoice) {
misses.innerHTML = `Misses: ${++totalMisses}`;
result.innerHTML += " Miss.";
} else {
goals.innerHTML = `Goals: ${++totalGoals}`;
result.innerHTML += " Goal.";
}
} else {
misses.innerHTML = `Misses: ${++totalMisses}`;
result.innerHTML += " Over power. Miss.";
}

power.innerHTML = `Power: ${shotPower} seconds`;

if (totalChances > 0) {
totalChances--;
chances.innerHTML = `Chances: ${totalChances}`;
}

if (totalChances === 0) {
arrows.forEach(arrow => {
arrow.style.display = "none";
});
result.innerHTML = "Game over. Refresh the page to play again.";
restartButton.style.display = "block";
}
});
});

restartButton.addEventListener("click", resetGame);
});

window.addEventListener("beforeunload", resetGame);

function resetGame() {
totalChances = 5;
totalGoals = 0;
totalMisses = 0;
chances.innerHTML = `Chances: ${totalChances}`;
goals.innerHTML = `Goals: ${totalGoals}`;
misses.innerHTML = `Misses: ${totalMisses}`;
power.innerHTML = `Power:` ;
result.innerHTML = "";
arrows.forEach(arrow => {
arrow.style.display = "block";
});
restartButton.style.display = "none";
}
