document.getElementById("start").addEventListener("click", function(){
    document.getElementById("game").style.display = "block";
    var level = document.getElementById("level").value;
    if (level == "Normal"){
        var countDown = 30;
    }
    else if (level == "Easy") {
        var countDown = 20;
    } else {
        var countDown = 15;
    }
    
    var x = setInterval(function() {
        document.getElementById("timer").innerHTML = "Time left: " + countDown + " s ";
        countDown -= 1;
        if (countDown < 5) {
            document.getElementById("timer").style.backgroundColor = "red";
        }
        if (countDown < 0) {
        clearInterval(x);
        window.alert("TIME UP");
        }
    }, 1000);
    location.href = "#game";
});