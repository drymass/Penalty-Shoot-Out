const readyButton = document.querySelector("#ready-button");
const gameContainer = document.querySelector("#game");
const arrows = document.querySelectorAll("#arrows img");
const result = document.querySelector("#result");

function showElements() {
gameContainer.style.display = "block";
readyButton.style.display = "none";
}

document.getElementById("readyButton").addEventListener("click", showElements);

arrows.forEach(arrow => {
arrow.addEventListener("click", function () {
const randomNumber = Math.floor(Math.random() * 9) + 1;
const selectedArrow = Number(arrow.id.charAt(5));

if (selectedArrow === randomNumber) {
result.textContent = "Miss! The goalkeeper saved the shot.";
} else {
result.textContent = "Goal! The shot went in the net.";
}
});
});
