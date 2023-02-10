
const directions = ['upleft', 'up', 'upright', 'left', 'center', 'right', 'downleft', 'down', 'downright'];
let chances = 5;
let resultDisplay = document.getElementById("result");
let chancesDisplay = document.getElementById("chances");

for (let i = 0; i < directions.length; i++) {
let direction = directions[i];
let arrowImage = document.getElementById(direction);
arrowImage.addEventListener("click", function() {
if (chances > 0) {
let systemShot = directions[Math.floor(Math.random() * directions.length)];
if (systemShot === direction) {
resultDisplay.innerHTML = "Miss!";
} else {
resultDisplay.innerHTML = "Goal!";
}
chances--;
chancesDisplay.innerHTML = "Chances Remaining: " + chances;
}
if (chances === 0) {
resultDisplay.innerHTML = "Game Over!";
for (let j = 0; j < directions.length; j++) {
let arrowImage
