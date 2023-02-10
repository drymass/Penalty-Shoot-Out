document.getElementById("readyButton").addEventListener("click", function() {
document.getElementById("game").style.display = "flex";
document.getElementById("result").style.display = "block";
document.getElementById("readyButton").style.display = "none";

let chances = 5;
let goals = 0;
let misses = 0;

document.getElementById("arrow1").addEventListener("click", function() {
play("upleft");
});
document.getElementById("arrow2").addEventListener("click", function() {
play("up");
});
document.getElementById("arrow3").addEventListener("click", function() {
play("upright");
});
document.getElementById("arrow4").addEventListener("click", function() {
play("left");
});
document.getElementById("arrow5").addEventListener("click", function() {
play("center");
});
document.getElementById("arrow6").addEventListener("click", function() {
play("right");
});
document.getElementById("arrow7").addEventListener("click", function() {
play("downleft");
});
document.getElementById("arrow8").addEventListener("click", function() {
play("down");
});
document.getElementById("arrow9").addEventListener("click", function() {
play("downright");
});

function play(playerChoice) {
if (chances > 0) {
let goalkeeperChoice = getGoalkeeperChoice();
document.getElementById("result").innerHTML =
"Goalkeeper chose: " + goalkeeperChoice;
if (playerChoice === goalkeeperChoice) {
misses++;
} else {
goals++;
}
chances--;
updateScore();
} else {
document.getElementById("result").innerHTML =
"Game Over! Final Score: Goals: " +
goals +
" Misses: " +
misses +
" <br> <button id='restartButton'>Restart</button>";
document.getElementById("restartButton").addEventListener("click", function() {
chances = 5;
goals = 0;
misses = 0;
document.getElementById("result").innerHTML = "";
updateScore();
});
}
}

function updateScore() {
document.getElementById("result").innerHTML =
"Goals: " + goals + " Misses: " + misses + " Chances left: " + chances;
}

function getGoalkeeperChoice() {
let choices = [
"upleft",
"up",
"upright",
"left",
"center",
"right",
"downleft",
"down",
"downright"
];
return choices[Math.floor(Math.random() * choices.length)];
}
});
