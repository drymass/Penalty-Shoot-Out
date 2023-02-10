const arrows = document.querySelectorAll('.arrow');
const chances = document.querySelector('#chances');
const result = document.querySelector('#result');
const goals = document.querySelector('#goals');
const misses = document.querySelector('#misses');
const restartButton = document.querySelector('#restartButton');

let chanceCount = 5;
let goalCount = 0;
let missCount = 0;

arrows.forEach((arrow) => {
arrow.addEventListener('click', () => {
if (chanceCount > 0) {
const randomNum = Math.floor(Math.random() * 9);
const arrowNames = ['upleft', 'up', 'upright', 'left', 'center', 'right', 'downleft', 'down', 'downright'];
const goalkeeperChoice = arrowNames[randomNum];
result.innerHTML = `Goalkeeper jumped to ${goalkeeperChoice}.`;

if (arrow.id === goalkeeperChoice) {
missCount++;
misses.innerHTML = `Misses: ${missCount}`;
result.innerHTML = 'Miss';
} else {
goalCount++;
goals.innerHTML = `Goals: ${goalCount}`;
result.innerHTML = 'Goal!';
}

chanceCount--;
chances.innerHTML = `Chances: ${chanceCount}`;
}

if (chanceCount === 0) {
arrows.forEach((arrow) => {
arrow.style.display = 'none';
});
restartButton.style.display = 'block';
}
});
});

restartButton.addEventListener('click', () => {
chanceCount = 5;
goalCount = 0;
missCount = 0;
chances.innerHTML = `Chances: ${chanceCount}`;
goals.innerHTML = `Goals: ${goalCount}`;
misses.innerHTML = `Misses: ${missCount}`;
result.innerHTML = '';

arrows.forEach((arrow) => {
arrow.style.display = 'block';
});

restartButton.style.display = 'none';
});
