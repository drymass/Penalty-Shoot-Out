const readyButton = document.getElementById("readyButton");
const game = document.getElementById("game");
const arrows = document.querySelectorAll("#arrows img");
const result = document.getElementById("result");

readyButton.addEventListener("click", function () {
game.style.display = "block";
readyButton.style.display = "none";
});

arrows.forEach(function (arrow) {
arrow.addEventListener("click", function () {
const goalkeeperDirection = Math.floor(Math.random() * 9) + 1;
const playerDirection = Number(arrow.id.slice(-1));

if (goalkeeperDirection === playerDirection) {
result.textContent = "Miss!";
result.style.display = "block";
} else {
result.textContent = "Goal!";
result.style.display = "block";
}
});
});
``
