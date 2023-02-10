document.getElementById("readyButton").addEventListener("click", function() {
document.getElementById("game").style.display = "block";
document.getElementById("readyButton").style.display = "none";

var arrows = document.querySelectorAll("#arrows img");
var result = document.getElementById("result");
var chances = 5;
var goals = 0;
var misses = 0;

function updateScore() {
result.innerHTML = "Goals: " + goals + " Misses: " + misses + " Chances left: " + chances;
if (chances === 0) {
result.innerHTML = "Game Over. Goals: " + goals + " Misses: " + misses;
for (var i = 0; i < arrows.length; i++) {
arrows[i].style.pointerEvents = "none";
}
}
}

for (var i = 0; i < arrows.length; i++) {
arrows[i].addEventListener("click", function() {
if (chances > 0) {
var randomNumber = Math.floor(Math.random() * 9 + 1);
var goalkeeperDirection;
switch (randomNumber) {
case 1:
goalkeeperDirection = "upleft";
break;
case 2:
goalkeeperDirection = "up";
break;
case 3:
goalkeeperDirection = "upright";
break;
case 4:
goalkeeperDirection = "left";
break;
case 5:
goalkeeperDirection = "center";
break;
case 6:
goalkeeperDirection = "right";
break;
case 7:
goalkeeperDirection = "downleft";
break;
case 8:
goalkeeperDirection = "down";
break;
case 9:
goalkeeperDirection = "downright";
break;
}
if (this.id.includes(goalkeeperDirection)) {
misses++;
result.innerHTML = "Miss! Goalkeeper jumped to " + goalkeeperDirection;
} else {
goals++;
result.innerHTML = "Goal! Goalkeeper jumped to " + goalkeeperDirection;
}
chances--;
updateScore();
}
});
}
updateScore();
});
