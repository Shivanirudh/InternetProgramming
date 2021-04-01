time = 5;
var x = setInterval(function() {
    document.getElementById("timer").innerHTML = "Redirecting to login page in : " + time + " s ";
    time -= 1;
    if(time < 0){
        clearInterval(x);
        location.href="index.html";
    }
}, 1000);