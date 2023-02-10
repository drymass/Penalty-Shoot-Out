const upleft = document.getElementById("upleft");
const up = document.getElementById("up");
const upright = document.getElementById("upright");
const left = document.getElementById("left");
const center = document.getElementById("center");
const right = document.getElementById("right");
const downleft = document.getElementById("downleft");
const down = document.getElementById("down");
const downright = document.getElementById("downright");
const chances = document.getElementById("chances");
const result = document.getElementById("result");
const goals = document.getElementById("goals");
const misses = document.getElementById("misses");
const userChoice = document.getElementById("userChoice");
const goalkeeperChoice = document.getElementById("goalkeeperChoice");
const restartButton = document.getElementById("restartButton");

let totalChances = 5;
let totalGoals = 0;
let totalMisses = 0;

const shoot = (event) => {
if (totalChances <= 0) {
return;
}

totalChances--;
chances.innerHTML = `Chances: ${totalChances}`;

const userArrow = event.target.id;
userChoice.innerHTML = `Your choice: ${userArrow}`;

let holdTime = 0;
let intervalId = null;
event.target.addEventListener("mousedown", () => {
intervalId = setInterval(() => {
holdTime += 0.1;
}, 100);
});
event.target.addEventListener("mouseup", () => {
clearInterval(intervalId);

const directions = ["upleft", "up", "upright", "left", "center", "right", "downleft", "down", "downright"];
const randomDirection = directions[Math.floor(Math.random() * directions.length)];
goalkeeperChoice.innerHTML = `Goalkeeper's choice: ${randomDirection}`;

if (holdTime < 0.3) {
result.innerHTML = "Miss!";
totalMisses++;
} else if (holdTime >= 0.3 && holdTime <= 1) {
if (userArrow === randomDirection) {
result.innerHTML = "Goal!";
totalGoals++;
} else {
result.innerHTML = "Miss!";
totalMisses++;
}
} else {
result.innerHTML = "Miss!";
totalMisses++;
}

goals.innerHTML = `Goals: ${totalGoals}`;
misses.innerHTML = `Misses: ${totalMisses}`;

if (totalChances === 0) {
restartButton.style.display = "block";
}
});
};

const restart = () => {
totalChances = 5;
totalGoals = 0;
totalMisses = 0;
chances.innerHTML = `Chances: ${totalChances}`;
goals.innerHTML = `Goals: ${totalGoals}`;
misses.innerHTML = `Misses: ${totalMisses}`;
userChoice.innerHTML = `"Your choice: "`;
goalkeeperChoice.innerHTML =` "Goalkeeper's choice: "`;
result.innerHTML = "";
restartButton.style.display = "none";
};

restartButton.style.display = "none";

upleft.addEventListener("click", shoot);
up.addEventListener("click", shoot);
upright.addEventListener("click", shoot);
left.addEventListener("click", shoot);
center.addEventListener("click", shoot);
right.addEventListener("click", shoot);
downleft.addEventListener("click", shoot);
down.addEventListener("click", shoot);
downright.addEventListener("click", shoot);
restartButton.addEventListener("click", restart);
