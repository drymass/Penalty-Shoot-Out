const readyButton = document.getElementById("readyButton");
const game = document.getElementById("game");
const arrows = document.querySelectorAll("#arrows img");
const goalkeeper = document.getElementById("goalkeeper");
const player = document.getElementById("player");
const gantry = document.getElementById("gantry");
const result = document.getElementById("result");

readyButton.addEventListener("click", showElements);

function showElements() {
game.style.display = "flex";
result.style.display = "none";
}

arrows.forEach(arrow => {
arrow.addEventListener("click", shoot);
});

function shoot() {
const randomNum = Math.floor(Math.random() * 9) + 1;
const playerShootDirection = this.id;
let goalkeeperJumpDirection;

switch (randomNum) {
case 1:
goalkeeperJumpDirection = "arrow1";
break;
case 2:
goalkeeperJumpDirection = "arrow2";
break;
case 3:
goalkeeperJumpDirection = "arrow3";
break;
case 4:
goalkeeperJumpDirection = "arrow4";
break;
case 5:
goalkeeperJumpDirection = "arrow5";
break;
case 6:
goalkeeperJumpDirection = "arrow6";
break;
case 7:
goalkeeperJumpDirection = "arrow7";
break;
case 8:
goalkeeperJumpDirection = "arrow8";
break;
case 9:
goalkeeperJumpDirection = "arrow9";
break;
}

if (playerShootDirection === goalkeeperJumpDirection) {
result.innerHTML = "Miss!";
} else {
result.innerHTML = "Goal!";
}

result.style.display = "block";
}
