var imgArray = new Array();
imgArray[0] = new Image(); 
imgArray[0].src = 'Pics/aang.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'Pics/aang.jpg';

imgArray[2] = new Image(); 
imgArray[2].src = 'Pics/appa.jpg';
imgArray[3] = new Image();
imgArray[3].src = 'Pics/appa.jpg';

imgArray[4] = new Image(); 
imgArray[4].src = 'Pics/azula.jpg';
imgArray[5] = new Image();
imgArray[5].src = 'Pics/azula.jpg';

imgArray[6] = new Image();
imgArray[6].src = 'Pics/bumi.jpg';
imgArray[7] = new Image();
imgArray[7].src = 'Pics/bumi.jpg';

imgArray[8] = new Image(); 
imgArray[8].src = 'Pics/iroh.jpg';
imgArray[9] = new Image();
imgArray[9].src = 'Pics/iroh.jpg';

imgArray[10] = new Image(); 
imgArray[10].src = 'Pics/katara.png';
imgArray[11] = new Image();
imgArray[11].src = 'Pics/katara.png';

imgArray[12] = new Image(); 
imgArray[12].src = 'Pics/momo.png';
imgArray[13] = new Image();
imgArray[13].src = 'Pics/momo.png';

imgArray[14] = new Image(); 
imgArray[14].src = 'Pics/Sokka.png';
imgArray[15] = new Image();
imgArray[15].src = 'Pics/Sokka.png';

imgArray[16] = new Image(); 
imgArray[16].src = 'Pics/toph.jpg';
imgArray[17] = new Image();
imgArray[17].src = 'Pics/toph.jpg';

imgArray[18] = new Image(); 
imgArray[18].src = 'Pics/zuko.jpg';
imgArray[19] = new Image();
imgArray[19].src = 'Pics/zuko.jpg';

var score;
let openedCards = [];
let matchedCards =  [];
var flip = false;

function shuffleArray(array) {  
    return array.sort( ()=>Math.random()-0.5 ); 
}  

var cells = document.getElementsByClassName("grid-item");
var cellsArray = [...cells];
var imgArray1 = shuffleArray(imgArray);

document.getElementById("start").addEventListener("click", function(){
    document.getElementById("game").style.display = "block";
    var level = document.getElementById("level").value;
    if (level == "Normal"){
        var countDown = 120;
    }
    else if (level == "Easy") {
        var countDown = 90;
    } else {
        var countDown = 60;
    }
    var i;
    for(i = 0; i < 20; i++){
        var id = "item" + (i+1).toString();
        var idb = id + "-b";
        document.getElementById(id).src='Pics/logo.jpg';
        document.getElementById(id).style.height="100px";
        document.getElementById(id).style.width="100px";
        document.getElementById(idb).src=imgArray1[i].src;
        document.getElementById(idb).style.height="100px";
        document.getElementById(idb).style.width="100px";
        document.getElementById(idb).style.display = "none";
    }

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

function setImg(){
    
    if(this === openedCards[0]){
        return;
    }
    this.classList.add("flip");
    if(!hasFlippedCard){
        hasFlippedCard = true;
        openedCards[0] = this;
        return;
    }
    openedCards[1] = this;
    if(openedCards[0].src === openedCards[1].src){
        matched();
    }
    else{
        unmatched();
    }
}

function matched() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    matchedCards.push(openedCards[0]);
    matchedCards.push(openedCards[1]);
    openedCards = [];
    if(matchedCards.length == 20) {
        endGame();
    }
}


for(var i = 0; i < cellsArray.length;i++){
    cellsArray[i].addEventListener("click", setImg);
}





/*
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



function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        openedCards[0].children[0].classList.remove('show-img');
        openedCards[1].children[0].classList.remove('show-img');
        enable();
        openedCards = [];
        
    }, 1100)
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

function endGame(){
    window.alert("Game over. Your score is: "+${score});
    document.getElementById("game").style.display="none";
    location.href = "#level";
}
*/