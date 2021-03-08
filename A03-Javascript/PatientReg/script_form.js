function myFocus(){
    document.getElementById("name").style.backgroundColor="#6bb8d8";
}

function myBlur(){
    document.getElementById("name").style.backgroundColor="white";
    document.getElementById("name").style.textTransform="uppercase";
}

function myInvalid(){
    var name=document.regform.name.value; 
    if(name == null || name == ""){
        alert("Name cannot be blank");
        return false;
    }
}

function mySelect(){
    document.getElementById("address").style.backgroundColor="black";
    document.getElementById("address").style.color="white";
}

function myKeypress(){
    var x = document.getElementById("age").value;
    if(isNaN(x)){
        window.alert("Enter numerical value only");
    }
}

function myChange(){
    var x = document.getElementById("status").value;
    window.alert("You are " + x);
}

function myNuminvalid(){
    var num = document.getElementById("phone").value;
    if(isNaN(num)){
        window.alert("Enter numerical value only");
    }
}

function validateName(){
    var name = document.getElementById("name").value;
    if(name == " || name == null"){
        window.alert("Enter Name");
        return false;
    }
    return true;
}

function validateAge(){
    var age = document.getElementById("age").value;
    if(isNaN(age)){
        window.alert("Enter Numerical values only");
        return false;
    }
    return true;
}

function validatePhone(){
    var num = document.getElementById("phone").value;
    if(isNaN(num)){
        window.alert("Enter Numerical values only");
        return false;
    }
    return true;
}

function mySubmit(){
    if(validateName() && validateAge() && validatePhone()){
        var name = document.getElementById("name").value;
        localStorage.setItem("name", name);

        var addr = document.getElementById("address").value;
        localStorage.setItem("address", addr);

        var age = document.getElementById("age").value;
        localStorage.setItem("age", age);

        var dob = document.getElementById("dob").value;
        localStorage.setItem("dob", dob);


        var ele = document.getElementsByName('gender'); 
        for(i = 0; i < ele.length; i++) { 
            if(ele[i].checked) 
                localStorage.setItem("gender", ele[i].value);
        } 

        var status = document.getElementById("status").value;
        localStorage.setItem("status", status);

        var phone = document.getElementById("phone").value;
        localStorage.setItem("phone", phone);

        var addict = document.getElementById("addict").value;
        localStorage.setItem("addict", addict);

        //location.target = "_blank";
        window.open("details.html", "_blank");
    }
}

function myReset(){
    document.getElementById("regform").reset();
}

var x = setInterval(function() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = "AM"; 

    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 

    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    let currentTime = hour + ":"  
        + min + ":" + sec + am_pm; 

    document.getElementById("clock") 
        .innerHTML = currentTime; 
}, 1000); 

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }