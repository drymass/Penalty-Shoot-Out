document.addEventListener("DOMContentLoaded", function() {
let readyButton = document.getElementById("readyButton");
let game = document.getElementById("game");
let arrows = document.getElementsByClassName("arrow");
let goalkeeper = document.getElementById("goalkeeper");
let player = document.getElementById("player");
let result = document.getElementById("result");
let directions = ["upleft", "up", "upright", "left", "center", "right", "downleft", "down", "downright"];

readyButton.addEventListener("click", function() {
game.style.display = "flex";
readyButton.style.display = "none";
});

for (let i = 0; i < arrows.length; i++) {
arrows[i].addEventListener("click", function() {
let randomIndex = Math.floor(Math.random() * directions.length);
let shotDirection = directions[i];
let saveDirection = directions[randomIndex];

if (shotDirection === saveDirection) {
result.innerHTML = `Miss! The goalkeeper saved the shot to ${saveDirection}. Keep trying!`;
result.style.display = "block";
} else {
result.innerHTML = `Goal! Congratulations! The goalkeeper couldn't save the shot to ${shotDirection}.`;
result.style.display = "block";
}
});
}
});
