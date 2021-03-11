const cells = document.querySelectorAll(".grid-item");

var score = 0;
let openedCards = [];
let matchedCards =  [];
var flip = false;
var pause = false;
var countDown = 0;

var level = document.getElementById("level").value;
if (level == "Normal"){
    countDown = 120;
}
else if (level == "Easy") {
    countDown = 90;
} else {
    countDown = 60;
}

document.getElementById("start").addEventListener("click", function(){
    document.getElementById("game").style.display = "block";
    
    var i;

    score = 0;
    document.getElementById("score").innerText = "Score:" + score.toString();

    var x = setInterval(function() {
        document.getElementById("timer").innerHTML = "Time left: " + countDown + " s ";
        countDown -= 1;
        if (countDown < 5) {
            document.getElementById("timer").style.backgroundColor = "red";
        }
        if (countDown < 0) {
        clearInterval(x);
        window.alert("TIME UP\n Your score is: " + score.toString());
        document.getElementById("game").style.display="none";
        location.reload();
        }
    }, 1000);

    location.href = "#game";
});

function showCard(){

    if(pause){
        return;
    }

    if(this === openedCards[0]){
        return;
    }

    this.classList.add("flip");

    if(!flip){
        flip = true;
        openedCards[0] = this;
        return;
    }
    
    openedCards[1] = this;
    
    if(openedCards[0].dataset.framework === openedCards[1].dataset.framework){
        pause = true;   
        setTimeout(disableCards, 450);
        updateScore();
    }
    else{
        hideCards();
    }
}

function updateScore(){
    score++;
    document.getElementById("score").innerText = "Score:" + score.toString();
    if(score == 10){
        window.alert("Congratulations! You won!!");
        location.reload();
    }
}

function disableCards(){
    //Disables the chosen cards

    openedCards[0].removeEventListener("click", showCard);
    openedCards[1].removeEventListener("click", showCard);

    openedCards[0].style.setProperty("visibility", "hidden");
    openedCards[1].style.setProperty("visibility", "hidden");

    resetGame();
}

function hideCards(){

    lockBoard = true;

    setTimeout(() => {
        openedCards[0].classList.remove("flip");
        openedCards[1].classList.remove("flip");
        resetGame();
    }, 1000);
}

function resetGame(){

    [flip, pause] = [false, false];
    openedCards = [];
}

(function shuffle() {
    cells.forEach(cell => {
      let randomPos = Math.floor(Math.random() * 20);
      cell.style.order = randomPos;
    });
  })();

  cells.forEach(cell => cell.addEventListener('click', showCard));