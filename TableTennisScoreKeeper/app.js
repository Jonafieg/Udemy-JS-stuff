let score = document.getElementById("score");
let scoreLimit = document.getElementById("scoreLimitSelect");
const player1ScoreBtn = document.getElementById("red");
const player2ScoreBtn = document.getElementById("blue");
const resetBtn = document.getElementById("yellow");
let player1Score = document.getElementById("playerOneScore");
let player2Score = document.getElementById("playerTwoScore");
let winner = document.getElementById("Winner");


let player1ScoreCount = 0;
let player2ScoreCount = 0;
let winningScore = 5;
let isGameOver = false;


player1ScoreBtn.addEventListener("click", function () {
    if (player1ScoreCount !== winningScore) {
        player1ScoreCount++;
        player1Score.textContent = player1ScoreCount;
    }
    else {
        isGameOver = true;
        player1Score.style.color = "green";
        player2Score.style.color = "red";
        winner.innerText = "Player 1 Wins!";
        player1ScoreBtn.disabled = true;
        player2ScoreBtn.disabled = true;
    }
})

player2ScoreBtn.addEventListener("click", function () {
    if (player2ScoreCount !== winningScore) {
    player2ScoreCount++;
    player2Score.innerText = player2ScoreCount;
    }
    else {
        isGameOver = true;
        player2Score.style.color = "green";
        player1Score.style.color = "red";
        winner.innerText = "Player 2 Wins!";
        player1ScoreBtn.disabled = true;
        player2ScoreBtn.disabled = true;
    }
})

resetBtn.addEventListener("click", function () {
    player1ScoreCount = 0;
    player2ScoreCount = 0;
    player1Score.innerText = player1ScoreCount;
    player2Score.innerText = player2ScoreCount;
    player1Score.style.color = "black";
    player2Score.style.color = "black";
    player1ScoreBtn.disabled = false;
    player2ScoreBtn.disabled = false;
    winner.innerText = "Climb to the Top!";
})

scoreLimit.addEventListener("change", function () {
    player1ScoreCount = 0;
    player2ScoreCount = 0;
    player1Score.innerText = player1ScoreCount;
    player2Score.innerText = player2ScoreCount;
    player1Score.style.color = "black";
    player2Score.style.color = "black";
    player1ScoreBtn.disabled = false;
    player2ScoreBtn.disabled = false;
    winningScore = parseInt(this.value);
    
})