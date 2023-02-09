var arrowElements = document.querySelectorAll("#arrows img");
var goalkeeperElement = document.querySelector("#goalkeeper");
var gantryElement = document.querySelector("#gantry");
var resultElement = document.querySelector("#result");

for (var i = 0; i < arrowElements.length; i++) {
arrowElements[i].addEventListener("click", function () {
var playerShootDirection = this.id.slice(-1);
var goalkeeperSaveDirection = Math.floor(Math.random() * 9) + 1;

if (playerShootDirection == goalkeeperSaveDirection) {
resultElement.textContent = "Miss! Goalkeeper saved in direction " + goalkeeperSaveDirection;
} else {
resultElement.textContent = "Goal! Goalkeeper was in direction " + goalkeeperSaveDirection;
}
});
}
