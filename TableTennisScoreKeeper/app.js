let score = document.getElementById("score");
let scoreLimit = document.getElementById("scoreLimitSelect").value;
let player1ScoreBtn = document.getElementById("red");
let player2ScoreBtn = document.getElementById("blue");
let resetBtn = document.getElementById("yellow");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");


let player1ScoreCount = 0;
let player2ScoreCount = 0;

player1ScoreBtn.addEventListener("click", function () {
    player1ScoreCount++;
    player1Score.innerText = player1ScoreCount;
},

player2ScoreBtn.addEventListener("click", function () {
    player2ScoreCount++;
    player2Score.innerText = player2ScoreCount;
}

if (player1Score == scoreLimit) {
    
}

if (player2Score == scoreLimit) {
    
}

resetBtn.addEventListener("click", function () {
    player1ScoreCount = 0;
    player2ScoreCount = 0;
    player1Score.innerText = player1ScoreCount;
    player2Score.innerText = player2ScoreCount;
}