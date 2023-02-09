const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const directionInput = document.getElementById("direction");
const resultDisplay = document.getElementById("result");

startButton.addEventListener("click", function() {
// Generate a random number for the goalkeeper direction
const goalkeeperDirection = Math.floor(Math.random() * 9) + 1;
// Compare the user selection with the goalkeeper direction
if (directionInput.value == goalkeeperDirection) {
resultDisplay.innerHTML = "Goal! The goalkeeper selected direction " + goalkeeperDirection;
} else {
resultDisplay.innerHTML = "Missed.";
}
});

restartButton.addEventListener("click", function() {
// Reset the result display and input
resultDisplay.innerHTML = "";
directionInput.value = "";
});
