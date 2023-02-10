const upleft = document.querySelector("#upleft");
const up = document.querySelector("#up");
const upright = document.querySelector("#upright");
const left = document.querySelector("#left");
const center = document.querySelector("#center");
const right = document.querySelector("#right");
const downleft = document.querySelector("#downleft");
const down = document.querySelector("#down");
const downright = document.querySelector("#downright");
const chances = document.querySelector("#chances");
const result = document.querySelector("#result");
const goals = document.querySelector("#goals");
const misses = document.querySelector("#misses");
const restartButton = document.querySelector("#restartButton");

let totalChances = 5;
let goalCount = 0;
let missCount = 0;

const arrows = [upleft, up, upright, left, center, right, downleft, down, downright];
const directions = ["upleft", "up", "upright", "left", "center", "right", "downleft", "down", "downright"];

function chooseDirection() {
const index = Math.floor(Math.random() * directions.length);
return directions[index];
}

function handleClick(event) {
if (totalChances <= 0)
{
return;
}
const direction = event.target.id;
const goalDirection = chooseDirection();
if (direction === goalDirection) {
result.textContent = "Goal!";
goalCount++;
goals.textContent = goalCount;
} else {
result.textContent = "Miss...";
missCount++;
misses.textContent = missCount;
}
totalChances--;
chances.textContent = totalChances;
if (totalChances === 0) {
result.textContent = "Game Over";
arrows.forEach(arrow => arrow.removeEventListener("click", handleClick));
restartButton.style.display = "block";
}
}
arrows.forEach(arrow => arrow.addEventListener("click", handleClick));

restartButton.addEventListener("click", function() {
totalChances = 5;
goalCount = 0;
missCount = 0;
chances.textContent = totalChances;
goals.textContent = goalCount;
misses.textContent = missCount;
result.textContent = "";
restartButton.style.display = "none";
arrows.forEach(arrow => arrow.addEventListener("click", handleClick));
});
