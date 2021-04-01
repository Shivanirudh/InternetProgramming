const numbers = document.querySelectorAll(".number");

function show(){ 
    document.getElementById("display").value += this.value; 
} 

function compute(){ 
    var x = document.getElementById("display").value; 
    var result = eval(x);
    document.getElementById("display").value = result;
} 

function clear_display(){ 
    document.getElementById("display").value = ""; 
} 

numbers.forEach(number => number.addEventListener('click', show));