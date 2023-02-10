const arrows = document.querySelectorAll('.arrow');
const chances = document.getElementById('chances');
const result = document.getElementById('result');
const goals = document.getElementById('goals');
const misses = document.getElementById('misses');
const restartButton = document.getElementById('restartButton');
const userChoice = document.getElementById('userChoice');
const goalkeeperChoice = document.getElementById('goalkeeperChoice');

let chancesCount = 5;
let goalsCount = 0;
let missesCount = 0;

function updateChances() {
chances.innerHTML = `Chances: ${chancesCount}`;
}

function updateGoals() {
goals.innerHTML = `Goals: ${goalsCount}`;
}

function updateMisses() {
misses.innerHTML = `Misses: ${missesCount}`;
}

function generateGoalkeeperChoice() {
const choices = ['upleft', 'up', 'upright', 'left', 'center', 'right', 'downleft', 'down', 'downright'];
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
}

function shoot(e) {
if (chancesCount > 0) {
const userShot = e.target.id;
userChoice.innerHTML = `User shot: ${userShot}`;
const goalkeeperSave = generateGoalkeeperChoice();
goalkeeperChoice.innerHTML = `Goalkeeper saved: ${goalkeeperSave}`;

if (userShot === goalkeeperSave) {
result.innerHTML = 'Miss!';
missesCount++;
updateMisses();
} else {
result.innerHTML = 'Goal!';
goalsCount++;
updateGoals();
}

chancesCount--;
updateChances();
if (chancesCount === 0) {
for (const arrow of arrows) {
arrow.removeEventListener('click', shoot);
}
restartButton.style.display = 'block';
}
}
}

for (const arrow of arrows) {
arrow.addEventListener('click', shoot);
}

restartButton.addEventListener('click', () => {
chancesCount = 5;
goalsCount = 0;
missesCount = 0;
updateChances();
updateGoals();
updateMisses();
result.innerHTML = '';
userChoice.innerHTML = '';
goalkeeperChoice.innerHTML = '';
restartButton.style.display = 'none';
for (const arrow of arrows) {
arrow.addEventListener('click', shoot);
}
});
