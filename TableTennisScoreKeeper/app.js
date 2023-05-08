let score = document.getElementById("score");
let scoreLimit = document.getElementById("scoreLimitSelect").value;
const player1ScoreBtn = document.getElementById("red");
const player2ScoreBtn = document.getElementById("blue");
const resetBtn = document.getElementById("yellow");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");
let winner = document.getElementById("winner");


let player1ScoreCount = 0;
let player2ScoreCount = 0;

player1ScoreBtn.addEventListener("click", function (player1ScoreCount, player1Score) {
    alert("Player 1 Scored!");
    player1ScoreCount++;
    player1Score.innerText = player1ScoreCount;
})

player2ScoreBtn.addEventListener("click", function (player2ScoreCount, player2Score) {
    player2ScoreCount++;
    player2Score.innerText = player2ScoreCount;
})

if (player1Score == scoreLimit) {
    winner.innerHTML = "Player 1 Wins!";
}

if (player2Score == scoreLimit) {
    winner.innerHTML = "Player 2 Wins!";
}

resetBtn.addEventListener("click", function () {
    alert("Game Reset!");
    player1ScoreCount = 0;
    player2ScoreCount = 0;
    player1Score.innerText = player1ScoreCount;
    player2Score.innerText = player2ScoreCount;
})

scoreLimit.addEventListener("change", function () {
    player1ScoreCount = 0;
    player2ScoreCount = 0;
    player1Score.innerText = player1ScoreCount;
    player2Score.innerText = player2ScoreCount;
})