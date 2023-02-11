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
const userChoice = event.target.alt;
const goalkeeperChoice = chooseDirection();
let shotPower;
let missReason;

const startTime = new Date();

function handleClickRelease(event) {
const endTime = new Date();
const elapsedTime = (endTime - startTime) / 1000;
if (elapsedTime <= 0.3) {
missReason = "Shot was under powered.";
shotPower = "Under powered";
} else if (elapsedTime > 0.3 && elapsedTime <= 1) {
if (userChoice === goalkeeperChoice) {
missReason = "Goalkeeper saved the shot.";
missCount++;
misses.innerHTML = `Misses: ${missCount}`;
} else {
goalCount++;
goals.innerHTML = `Goals: ${goalCount}`;
result.innerHTML = `Goal!`;
}
shotPower = "Balanced";
} else {
missReason = "Shot was over powered.";
shotPower = "Over powered";
}

if (missReason) {
result.innerHTML = missReason;
misses.innerHTML = `Misses: ${missCount}`;
totalChances--;
}
chances.innerHTML = `Chances: ${totalChances}`;
if (totalChances === 0) {
result.innerHTML = "Game Over! You scored " + goalCount + " goals.";
arrows.forEach(arrow => {
arrow.removeEventListener("mousedown", handleClick);
arrow.removeEventListener("mouseup", handleClickRelease);
});
}
}

arrow.addEventListener("mouseup", handleClickRelease);
}

arrows.forEach(arrow => {
arrow.addEventListener("mousedown", handleClick);
});

function handleClick(event) {
const userChoice = event.target.alt;
const goalkeeperChoice = chooseDirection();
let shotPower;
let missReason;

const startTime = new Date();

function handleClickRelease(event) {
const endTime = new Date();
const elapsedTime = (endTime - startTime) / 1000;
if (elapsedTime <= 0.3) {
missReason = "Shot was under powered.";
shotPower = "Under powered";
} else if (elapsedTime > 0.3 && elapsedTime <= 1) {
if (userChoice === goalkeeperChoice) {
missReason = "Goalkeeper saved the shot.";
missCount++;
misses.innerHTML = `Misses: ${missCount}`;
} else {
goalCount++;
goals.innerHTML = `Goals: ${goalCount}`;
result.innerHTML = `Goal!`;
}
shotPower = "Balanced";
} else {
missReason = "Shot was over powered.";
shotPower = "Over powered";
}

if (missReason) {
result.innerHTML = missReason;
misses.innerHTML = `Misses: ${missCount}`;
totalChances--;
}
chances.innerHTML = `Chances: ${totalChances}`;
if (totalChances === 0) {
result.innerHTML = "Game Over! You scored " + goalCount + " goals.";
arrows.forEach(arrow => {
arrow.removeEventListener("mousedown", handleClick);
arrow.removeEventListener("mouseup", handleClickRelease);
});
}
}

arrow.addEventListener("mouseup", handleClickRelease);
}

arrows.forEach(arrow => {
arrow.addEventListener("mousedown", handleClick);
});

arrows.forEach(arrow => {

arrow.addEventListener("mousedown", handleClick);

arrow.addEventListener("mouseup", handleClickRelease);
});

restartButton.addEventListener("click", function() {
totalChances = 5;
goalCount = 0;
missCount = 0;
chances.innerHTML = `Chances: ${totalChances}`;
goals.innerHTML = `Goals: ${goalCount}`;
misses.innerHTML = `Misses: ${missCount}`;
result.innerHTML = "";
arrows.forEach(arrow => {
arrow.addEventListener("mousedown", handleClick);
arrow.addEventListener("mouseup", handleClickRelease);
});
});
}
function initializegame(){
document.addEventListener("DOMContentLoaded", initializegame);
}

initializegame();
