let goalkeeperDirection = Math.floor(Math.random() * 9) + 1;
let shotDirection = 0;

const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const directionInput = document.getElementById("direction");
const resultDisplay = document.getElementById("result");
const goalkeeper = document.getElementById("goalkeeper");
const player = document.getElementById("player");
const gantry = document.getElementById("gantry");

startButton.addEventListener("click", function () {
shotDirection = parseInt(directionInput.value);
if (shotDirection === goalkeeperDirection) {
resultDisplay.innerHTML = "Miss";
goalkeeper.src = "GoalkeeperImage" + goalkeeperDirection + ".jpg";
} else {
resultDisplay.innerHTML = "Goal! The goalkeeper selected direction " + goalkeeperDirection;
player.src = "PlayerImage.jpg";
gantry.src = "GantryImage.jpg";
}
});

restartButton.addEventListener("click", function () {
location.reload();
});
