document.addEventListener("DOMContentLoaded", function() {
var readyButton = document.getElementById("readyButton");
var game = document.getElementById("game");
var arrows = document.querySelectorAll("#arrows img");
var result = document.getElementById("result");
var chances = 5;
var goals = 0;
var misses = 0;

readyButton.addEventListener("click", function() {
readyButton.style.display = "none";
game.style.display = "flex";

arrows.forEach(function(arrow) {
arrow.addEventListener("click", function() {
if (chances > 0) {
var goalkeeper = Math.floor(Math.random() * 9) + 1;
var player = parseInt(this.id.replace("arrow", ""));

if (goalkeeper === player) {
result.innerHTML = "Miss! The goalkeeper jumps to the " + player + " direction.";
misses += 1;
} else {
result.innerHTML = "Goal! The goalkeeper jumps to the " + goalkeeper + " direction.";
goals += 1;
}

chances -= 1;
document.getElementById("result").style.display = "block";
} else {
result.innerHTML = "Chances are over! Your score is " + goals + " goals and " + misses + " misses.";
}
});
});
});
});
