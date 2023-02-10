const readyButton = document.getElementById("readyButton");
const game = document.getElementById("game");
const arrows = document.querySelectorAll("#arrows img");
const result = document.getElementById("result");
const directions = ['upleft', 'up', 'upright', 'left', 'center', 'right', 'downleft', 'down', 'downright'];
let chances = 3;
let goals = 0;
let misses = 0;

readyButton.addEventListener("click", function () {
readyButton.style.display = "none";
game.style.display = "flex";
});

arrows.forEach(arrow => {
arrow.addEventListener("click", function () {
if (chances > 0) {
let playerChoice = arrow.id.slice(-1);
let randomIndex = Math.floor(Math.random() * 9);
let keeperChoice = randomIndex + 1;
if (playerChoice === keeperChoice.toString()) {
misses++;
result.innerHTML = `Miss! The keeper jumped to the ${directions[randomIndex]}`;
} else {
goals++;
result.innerHTML = `Goal! The keeper jumped to the ${directions[randomIndex]}`;
}
chances--;
if (chances === 0) {
result.innerHTML += `<br>You have made ${goals} goals and ${misses} misses.`;
arrows.forEach(arrow => {
arrow.style.pointerEvents = "none";
});
}
}
});
});
