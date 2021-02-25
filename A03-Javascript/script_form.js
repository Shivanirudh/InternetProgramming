function validateName(){

}


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

function mySubmit(){
    var name = document.getElementById("name").value;
    document.getElementById("r1").innerHTML = name;

    var addr = document.getElementById("address").value;
    document.getElementById("r2").innerHTML = addr;

    var age = document.getElementById("age").value;
    document.getElementById("r3").innerHTML = age;

    var dob = document.getElementById("dob").value;
    document.getElementById("r4").innerHTML = dob;


    var ele = document.getElementsByName('gender'); 
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
            document.getElementById("r5").innerHTML = ele[i].value;
    } 

    var status = document.getElementById("status").value;
    document.getElementById("r6").innerHTML = status;

    var phone = document.getElementById("phone").value;
    document.getElementById("r7").innerHTML = phone;

    var addict = document.getElementById("addict").value;
    document.getElementById("r8").innerHTML = addict;

    document.getElementById("submission").style.display = "block";
    location.href="#submission";
    //location.target = "_blank";
   //window.open(document.getElementById("submission"), "_blank");
}

function myReset(){
    document.getElementById("submission").style.display = "none";
    document.getElementById("regform").reset();
}
