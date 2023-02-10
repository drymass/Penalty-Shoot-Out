const upleft = document.getElementById("upleft");
const up = document.getElementById("up");
const upright = document.getElementById("upright");
const left = document.getElementById("left");
const center = document.getElementById("center");
const right = document.getElementById("right");
const downleft = document.getElementById("downleft");
const down = document.getElementById("down");
const downright = document.getElementById("downright");

const result = document.getElementById("result");
const chances = document.getElementById("chances");
const goals = document.getElementById("goals");
const misses = document.getElementById("misses");
const restartButton = document.getElementById("restart-button");

const directions = [
"upleft",
"up",
"upright",
"left",
"center",
"right",
"downleft",
"down",
"downright"
];

let remainingChances = 5;
let totalGoals = 0;
let totalMisses = 0;

const shoot = (e) => {
const clickedDirection = e.target.id;
const systemDirection =
directions[Math.floor(Math.random() * directions.length)];

if (clickedDirection === systemDirection) {
result.innerHTML = "Miss!";
totalMisses++;
misses.innerHTML = `Misses: ${totalMisses}`;
} else {
result.innerHTML = "Goal!";
totalGoals++;
goals.innerHTML = `Goals: ${totalGoals}`;
}

remainingChances--;
chances.innerHTML = `Remaining Chances: ${remainingChances}`;

if (remainingChances === 0) {
upleft.removeEventListener("click", shoot);
up.removeEventListener("click", shoot);
upright.removeEventListener("click", shoot);
left.removeEventListener("click", shoot);
center.removeEventListener("click", shoot);
right.removeEventListener("click", shoot);
downleft.removeEventListener("click", shoot);
down.removeEventListener("click", shoot);
downright.removeEventListener("click", shoot);

result.innerHTML = "Game Over";
restartButton.style.display = "block";
}
};

const restart = () => {
upleft.addEventListener("click", shoot);
up.addEventListener("click", shoot);
upright.addEventListener("click", shoot);
left.addEventListener("click", shoot);
center.addEventListener("click", shoot);
right.addEventListener("click", shoot);
downleft.addEventListener("click", shoot);
down.addEventListener("click", shoot);
downright.addEventListener("click", shoot);

remainingChances = 5;
totalGoals = 0;
totalMisses = 0;

chances.innerHTML = `Remaining Chances: ${remainingChances
