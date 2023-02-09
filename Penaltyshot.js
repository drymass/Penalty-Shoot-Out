const resultDiv = document.querySelector("#result");
const goalkeeperDirection = Math.floor(Math.random() * 9) + 1;

arrows.forEach(arrow => {
arrow.addEventListener("click", e => {
let playerDirection = e.target.id.slice(-1);
let result;
if (playerDirection == goalkeeperDirection) {
result = "miss";
} else {
result = "goal";
}
resultDiv.textContent = result;
resultDiv.style.display = "block";
});
});
