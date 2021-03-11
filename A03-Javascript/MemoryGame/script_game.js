const cells = document.querySelectorAll(".grid-item");

var score;
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
        location.href = "#level";
        }
    }, 1000);

    location.href = "#game";
});

function showCard(){

    if(pause){
        return;
    }

    if(this === firstCard){
        return;
    }

    this.classList.add("flip");

    if(!flip){
        flip = true;
        openedCards[0] = this;
        return;
    }
    
    openedCards[1] = this;
    
    if(openedCards[0].value === openedCards[1].value){
        pause = true;   
        setTimeout(disableCards, 450);
        updateScore();
    }
    else{
        hideCards();
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


function shuffleArray(array) {  
    return array.sort( ()=>Math.random()-0.5 ); 
}  
/*
function setImg(){
    
    if(this === openedCards[0]){
        return;
    }
    this.classList.add("flip");
    this.children[0].style.visibility = "hidden";
    this.children[1].style.display = "block";
    this.children[1].style.visibility = "visible";
    if(!flip){
        flip = true;
        openedCards[0] = this;
        return;
    }
    openedCards[1] = this;
    if(openedCards[0].children[1].src === openedCards[1].children[1].src){
        matched();
    }
    else{
        unmatched();
    }
}

function matched() {
    function disableCards(){
        //Disables the chosen cards
    
        openedCards[0].removeEventListener("click", setImg);
        openedCards[1].removeEventListener("click", setImg);
    
        openedCards[0].style.setProperty("visibility", "hidden");
        openedCards[1].style.setProperty("visibility", "hidden");
    
        resetBoard();
    }
    matchedCards.push(openedCards[0]);
    matchedCards.push(openedCards[1]);
    score += 1;
    updateScore();
    openedCards = [];
    if(matchedCards.length == 20) {
        endGame();
    }
}

function unmatched() {
    openedCards[0].classList.remove("flip");
    openedCards[1].classList.remove("flip");

    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");

    openedCards[0].children[0].style.setProperty("visibility", "visible");
    openedCards[0].children[1].style.setProperty("visibility", "hidden");
    openedCards[1].children[0].style.setProperty("visibility", "visible");
    openedCards[1].children[1].style.setProperty("visibility", "hidden");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("unmatched");
        openedCards[1].classList.remove("unmatched");
        enable();
        openedCards = [];
    }, 1000)
}

function updateScore(){
    document.getElementById("score").innerText = "Score:" + score.toString();
}

for(var i = 0; i < cellsArray.length;i++){
    cellsArray[i].addEventListener("click", setImg);
}

function endGame(){
    window.alert("Game over. Your score is: "+ score.toString());
    document.getElementById("game").style.display="none";
    location.href = "#level";
}

function disable() {
    cellsArray.filter((cell, i, cellsArray) => {
        cell.classList.add('disabled');
    })
}

function enable() {
    cellsArray.filter((cell, i, cellsArray) => {
        cell.classList.remove('disabled');
        for(let i=0; i<matchedCards.length; i++) {
            matchedCards[i].classList.add('disabled');
        }
    })
}


function flashCards() {
    for(i=0; i<cardElements.length; i++) {
        cells[i].children[0].classList.add("show-img")
    }
    setTimeout(function(){
        for(i=0; i<cells.length; i++) {
            cells[i].children[0].classList.remove("show-img")
        }
    }, 1000)
}

function displayCard() {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    cardOpen(this);
}

function cardOpen(card) {
    openedCards.push(card);
    let len = openedCards.length;
    if(len === 2) {
        if(openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

*/